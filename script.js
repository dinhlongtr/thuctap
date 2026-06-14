pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

let pageFlipObj = null;
let currentZoom = 1.0;
const ZOOM_SPEED = 0.15;
const MAX_ZOOM = 2.5;
const MIN_ZOOM = 0.6;

window.addEventListener('DOMContentLoaded', function() {
    const pdfUrl = 'final.pdf';

    pdfjsLib.getDocument(pdfUrl).promise
        .then(function(pdf) {
            renderBookWithPageFlip(pdf);
        })
        .catch(function(error) {
            console.error("Lỗi đọc file PDF:", error);
            document.getElementById('loading-text').textContent = "Lỗi kết nối tệp: " + error.message;
        });
});

async function renderBookWithPageFlip(pdf) {
    const bookContainer = document.getElementById('book');
    const loadingOverlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');
    const totalPages = pdf.numPages;


    const availableHeight = window.innerHeight * 0.75;
    const viewHeight = Math.round(availableHeight); 
    const viewWidth = Math.round(viewHeight * 0.707);

    document.getElementById('total-pages-text').textContent = `/ ${totalPages}`;


    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page';
        pageDiv.innerHTML = `
            <div class="page-content">
                <canvas id="pdf-canvas-${pageNum}"></canvas>
            </div>
        `;
        bookContainer.appendChild(pageDiv);
    }


    pageFlipObj = new St.PageFlip(bookContainer, {
        width: viewWidth,
        height: viewHeight,
        size: "fixed",
        drawShadow: true,
        showCover: true,     
        usePortrait: false, 
        swipeDistance: 30
    });

    pageFlipObj.loadFromHTML(document.querySelectorAll('.page'));




    const inputPage = document.getElementById('input-page');
    
    const updatePaginationDisplay = () => {
        const currentIndex = pageFlipObj.getCurrentPageIndex();
        

        if (currentIndex === 0) {
            inputPage.value = 1;
            document.getElementById('total-pages-text').textContent = `/ ${totalPages} (Bìa)`;
        } else {
            inputPage.value = currentIndex + 1;
            document.getElementById('total-pages-text').textContent = `/ ${totalPages}`;
        }
    };

    pageFlipObj.on('flip', updatePaginationDisplay);
    updatePaginationDisplay();


    inputPage.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            let targetPage = parseInt(this.value);
            if (!isNaN(targetPage) && targetPage >= 1 && targetPage <= totalPages) {
                pageFlipObj.flip(targetPage - 1); 
            } else {
                updatePaginationDisplay(); 
            }
        }
    });


    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        try {
            if (loadingText) loadingText.textContent = `Đang tối ưu giao diện bìa sách (${pageNum}/${totalPages})...`;

            const page = await pdf.getPage(pageNum);
            const canvas = document.getElementById(`pdf-canvas-${pageNum}`);
            
            if (canvas) {
                const context = canvas.getContext('2d');
                const viewport = page.getViewport({ scale: 2.0 }); 
                
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                await page.render({
                    canvasContext: context,
                    viewport: viewport
                }).promise;
            }
        } catch (err) {
            console.error(`Lỗi kết xuất trang ${pageNum}:`, err);
        }
    }


    if (loadingOverlay) {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => loadingOverlay.style.display = 'none', 300);
    }


    const zoomArea = document.getElementById('zoom-area');
    const zoomText = document.getElementById('zoom-text');

    const applyZoom = () => {
        zoomArea.style.transform = `scale(${currentZoom})`;
        zoomText.textContent = `${Math.round(currentZoom * 100)}%`;
    };

    document.getElementById('btn-zoom-in').addEventListener('click', function() {
        if (currentZoom < MAX_ZOOM) {
            currentZoom += ZOOM_SPEED;
            applyZoom();
        }
    });

    document.getElementById('btn-zoom-out').addEventListener('click', function() {
        if (currentZoom > MIN_ZOOM) {
            currentZoom -= ZOOM_SPEED;
            applyZoom();
        }
    });

    document.getElementById('btn-zoom-reset').addEventListener('click', function() {
        currentZoom = 1.0;
        applyZoom();
    });


    document.getElementById('btn-prev').addEventListener('click', () => pageFlipObj.flipPrev());
    document.getElementById('btn-next').addEventListener('click', () => pageFlipObj.flipNext());
    
    document.getElementById('btn-first').addEventListener('click', () => pageFlipObj.flip(0));
    document.getElementById('btn-last').addEventListener('click', () => pageFlipObj.flip(totalPages - 1));


    document.getElementById('btn-fullscreen').addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => console.log(err));
        } else {
            document.exitFullscreen();
        }
    });
}