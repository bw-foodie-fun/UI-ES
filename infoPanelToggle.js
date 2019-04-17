class PanelSelector {
    constructor(element) {

        this.element = element

        this.data = this.element.dataset.info

        this.itemElement = document.querySelector(`.info-panel[data-info="${this.data}"]`)

        this.tabItem = new TabSelector(this.itemElement)

        this.element.addEventListener('click', () => {
            this.select();
        })

    }

    select() {
        let links = document.querySelectorAll('.nav-link')

        let navBar = document.querySelector('.bottom-menu')

        let banner = document.querySelector('.banner')

        banner.classList.add('link-clicked');

        navBar.classList.add('click-menu');

        links.forEach(link => {
            link.classList.remove('tab-selected')
        })

        this.element.classList.add('tab-selected')

        this.tabItem.select();
    }
}

class TabSelector {
    constructor(element) {
        this.element = element


    }

    select() {
        const panels = document.querySelectorAll('.info-panel')

        panels.forEach(panel => {
            panel.classList.remove('info-panel-selected')
        })


        this.element.classList.add('info-panel-selected')

    }

}

const infoPanels = document.querySelectorAll('.nav-link')

infoPanels.forEach(panel => {
    new PanelSelector(panel)
})