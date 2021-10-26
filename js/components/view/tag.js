export const createTag = (name) => {
    return `  
    <div class="zoneTag">
        <div class="tag">
            <span class="tagTxt">${name}</span>
            <i class="bi bi-x-circle"></i>
        </div>
    </div>
    `
}