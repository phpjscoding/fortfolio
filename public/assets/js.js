class StickyNavigation {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      
      // Bind the event handlers to the instance of the class
      this.onTabClick = this.onTabClick.bind(this);
      this.onScroll = this.onScroll.bind(this);
      this.onResize = this.onResize.bind(this);
      
      // Event listeners
      document.querySelectorAll('.et-hero-tab').forEach(tab => {
        tab.addEventListener('click', (event) => this.onTabClick(event, tab));
      });
      
      window.addEventListener('scroll', this.onScroll);
      window.addEventListener('resize', this.onResize);
    }
  
    onTabClick(event, element) {
      event.preventDefault();
      let targetId = element.getAttribute('href');
      let scrollTop = document.querySelector(targetId).offsetTop - this.tabContainerHeight + 1;
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  
    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    }
  
    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    }
  
    checkTabContainerPosition() {
      let tabContainer = document.querySelector('.et-hero-tabs');
      let offset = tabContainer.offsetTop + tabContainer.offsetHeight - this.tabContainerHeight;
  
      if (window.scrollY > offset) {
        document.querySelector('.et-hero-tabs-container').classList.add('et-hero-tabs-container--top');
      } else {
        document.querySelector('.et-hero-tabs-container').classList.remove('et-hero-tabs-container--top');
      }
    }
  
    findCurrentTabSelector() {
      let newCurrentId;
      let newCurrentTab;
  
      document.querySelectorAll('.et-hero-tab').forEach(tab => {
        let id = tab.getAttribute('href');
        let offsetTop = document.querySelector(id).offsetTop - this.tabContainerHeight;
        let offsetBottom = document.querySelector(id).offsetTop + document.querySelector(id).offsetHeight - this.tabContainerHeight;
  
        if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
          newCurrentId = id;
          newCurrentTab = tab;
        }
      });
  
      if (this.currentId !== newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }
  
    setSliderCss() {
      let width = 0;
      let left = 0;
  
      if (this.currentTab) {
        width = window.getComputedStyle(this.currentTab).width;
        left = this.currentTab.offsetLeft;
      }
  
      document.querySelector('.et-hero-tab-slider').style.width = width;
      document.querySelector('.et-hero-tab-slider').style.left = left + 'px';
    }
  }
  
  new StickyNavigation();
  