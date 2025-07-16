customElements.define("sgj-glass-morphism", class extends HTMLElement {
    connectedCallback() {
        const thick = `${this.getAttribute("thick") || 5}px`
        const pattern = `${this.getAttribute("pattern") || 3}px`
        const patternBlur = `${this.getAttribute("patternBlur") || 2}px`

        this.innerHTML = `
            <section style="
                --glassWhite: color-mix(in srgb, #fff 15%, transparent);
                --thick: ${thick};
                width: inherit;
                height: inherit;
                aspect-ratio: inherit;
                position: relative;
                z-index: 1;
            ">
                <article style="
                    position: absolute;
                    inset: var(--thick);
                    backdrop-filter: blur(16px);
                    background: var(--glassWhite);
                ">${this.innerHTML}</article>
                <article style="
                    --gap: ${pattern};
                    --linear: var(--glassWhite) 0, var(--glassWhite) var(--gap),
                            transparent calc(var(--gap) * 2), transparent calc(var(--gap) * 3);
                    position: absolute;
                    inset: var(--thick);
                    filter: blur(${patternBlur});
                    background: repeating-linear-gradient(45deg, var(--linear)), 
                                repeating-linear-gradient(135deg, var(--linear));
                "></article>
                <article style="
                    --linear: #000 var(--thick), transparent var(--thick);
                    position: absolute;
                    inset: 0;
                    border-radius: 5px;
                    background: var(--glassWhite);
                    backdrop-filter: blur(60px) brightness(90%) contrast(1.2) saturate(120%);
                    mask: linear-gradient(0deg, var(--linear)), 
                        linear-gradient(90deg, var(--linear)), 
                        linear-gradient(180deg, var(--linear)), 
                        linear-gradient(270deg, var(--linear));
                "></article>
            </section>
        `
    }
})

document.querySelectorAll("glass").forEach(e => e.outerHTML = e.outerHTML.replace("glass", "sgj-glass-morphism"))