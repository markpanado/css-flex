const wrapper = document.querySelector('#wrapper');
const max_tile_per_row = 3;

for (let tiles_count = 1; tiles_count <= 20; tiles_count++) {
    let tile_group = '';
    let tile_flag = ((tiles_count - 1) % max_tile_per_row) ? '' : 'flag';

    for (let i = 1; i <= tiles_count; i++) {
        tile_group += `<div class="tile">${i}</div>`;
    }

    wrapper.insertAdjacentHTML('beforeend', `
        <div class="tile-group">
            <h2>Tiles Count <span>${tiles_count}</span></h2>
            <div class="tiles  ${tile_flag}" data-tile-count="${tiles_count}">
                ${tile_group}
            </div>
        </div>
    `);
}