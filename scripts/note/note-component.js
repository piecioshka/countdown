(function (global) {
    'use strict';

    const DEFAULT_NUMBER_OF_COLUMNS = 15;

    class NoteComponent {
        constructor({ x, y }) {
            this.$element = NoteComponent.buildDOM(x, y);
            this._removeNote = this._removeNote.bind(this);
            this.render();
        }

        render() {
            let $target = document.body;
            $target.appendChild(this.$element);
            this._focusOnTextField();
            this._registerCloseButton();
        }

        getDOMElement() {
            return this.$element;
        }

        _focusOnTextField() {
            let $textarea = this.$element.querySelector('textarea');
            $textarea.focus();
        }

        _registerCloseButton() {
            let $legend = this.$element.querySelector('legend');
            $legend.addEventListener('dblclick', this._removeNote);
        }

        _removeNote() {
            this._unregisterCloseButton();
            this.$element.parentNode.removeChild(this.$element);
        }

        _unregisterCloseButton() {
            let $legend = this.$element.querySelector('legend');
            $legend.removeEventListener('dblclick', this._removeNote);
        }

        static buildDOM(x, y) {
            let $container = document.createElement('fieldset');
            $container.classList.add('note');
            $container.style.left = `${x}px`;
            $container.style.top = `${y}px`;

            let $legend = document.createElement('legend');
            $legend.innerText = `x`;
            $container.appendChild($legend);

            let $textarea = document.createElement('textarea');
            $textarea.cols = DEFAULT_NUMBER_OF_COLUMNS;
            $container.appendChild($textarea);

            return $container
        }
    }

    global.NoteComponent = NoteComponent;

})(window);
