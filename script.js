        document.addEventListener('DOMContentLoaded', function() {
            const musicGrid = document.getElementById('musicGrid');
            
            musicGrid.addEventListener('click', function(e) {
                const tile = e.target.closest('.music-tile');
                if (!tile) return;
                
                // zignoruj
                if (tile.classList.contains('expanded')) return;
                
                // Zamknij kafelki
                document.querySelectorAll('.music-tile.expanded').forEach(openTile => {
                    openTile.classList.remove('expanded');
                    openTile.innerHTML = `
                        <img src="https://img.youtube.com/vi/${openTile.dataset.youtubeId}/hqdefault.jpg" alt="${openTile.dataset.title}">
                        <div class="title">${openTile.dataset.title}</div>
                    `;
                });
                
                // Zapisz kafelka
                const originalContent = tile.innerHTML;
                const title = tile.querySelector('.title').textContent;
                
                // Rozszerz kafelek
                tile.classList.add('expanded');
                tile.innerHTML = `
                    <button class="close-btn">&times;</button>
                    <div class="player-container">
                        <iframe src="https://www.youtube.com/embed/${tile.dataset.youtubeId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="title" style="font-size: 18px; padding: 15px;">${title}</div>
                `;
                
                // Przycisk zamknięcia
                tile.querySelector('.close-btn').addEventListener('click', function(e) {
                    e.stopPropagation();
                    tile.classList.remove('expanded');
                    tile.innerHTML = originalContent;
                });
            });
        });
