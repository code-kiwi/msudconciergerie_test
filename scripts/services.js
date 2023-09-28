const overlayElement = document.getElementById('overlay');
const bodyElement = document.querySelector('body');
const servicesContainerElement = document.getElementById('servicesContainerElement');
let openedModal = null;

const modalHandler = (event) => {
    const serviceElement = event.target.closest('.main__content__service');
    if (serviceElement != null) {
        const modalElement = serviceElement.querySelector('.main__content__service__modal');
        if (modalElement != null && overlayElement != null && bodyElement != null) {
            if (!modalElement.classList.contains('modalOpened') && openedModal == null) {
                modalElement.classList.add('modalOpened');
                overlayElement.classList.add('modalOpened');
                bodyElement.classList.add('modalOpened');
                openedModal = modalElement;
            } else if (modalElement.classList.contains('modalOpened')) {
                const closeButton1 = event.target.closest('.main__content__service__modal__xmark');
                const closeButton2 = event.target.closest('.main__content__service__modal__closeButton');
                if (closeButton1 != null || closeButton2 != null) {
                    modalElement.classList.remove('modalOpened');
                    overlayElement.classList.remove('modalOpened');
                    bodyElement.classList.remove('modalOpened');
                    openedModal = null;
                }
            }
        }
    }
};

const overlayHandler = (event) => {
    if (overlayElement.classList.contains('modalOpened')) {
        const openedModalElements = document.querySelectorAll('.modalOpened');
        openedModalElements.forEach((element) => {
            element.classList.remove('modalOpened');
            openedModal = null;
        });
    }
};

servicesContainerElement.addEventListener('click', modalHandler);
overlayElement.addEventListener('click', overlayHandler);
