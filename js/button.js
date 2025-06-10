const button = document.getElementById('showButton');
        const hiddenText = document.getElementById('hiddenText');

        button.addEventListener('click', () => {
            // Hide button when clicked
            button.classList.add('hidden');

            // Toggle text visibility
            if (hiddenText.classList.contains('show')) {
                hiddenText.classList.remove('show');
            } else {
                hiddenText.classList.add('show');
            }
        });