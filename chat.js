document.addEventListener('DOMContentLoaded', function () {
    let chatBox = document.createElement('div');
    chatBox.id = 'chatBox';
    chatBox.style.position = 'fixed';
    chatBox.style.bottom = '10px';
    chatBox.style.right = '10px';
    chatBox.style.width = '300px';
    chatBox.style.height = '400px';
    chatBox.style.border = '1px solid #333';
    chatBox.style.backgroundColor = 'white';
    chatBox.style.overflow = 'hidden';
    chatBox.style.display = 'none';
    document.body.appendChild(chatBox);

    let chatHeader = document.createElement('div');
    chatHeader.style.backgroundColor = '#333';
    chatHeader.style.color = 'white';
    chatHeader.style.padding = '10px';
    chatHeader.innerText = 'Chat with us';
    chatBox.appendChild(chatHeader);

    let chatMessages = document.createElement('div');
    chatMessages.style.height = '300px';
    chatMessages.style.overflowY = 'scroll';
    chatMessages.style.padding = '10px';
    chatBox.appendChild(chatMessages);

    let chatInput = document.createElement('input');
    chatInput.type = 'text';
    chatInput.style.width = '100%';
    chatInput.style.boxSizing = 'border-box';
    chatInput.style.padding = '10px';
    chatBox.appendChild(chatInput);

    let chatToggleButton = document.createElement('button');
    chatToggleButton.innerText = 'Chat';
    chatToggleButton.style.position = 'fixed';
    chatToggleButton.style.bottom = '10px';
    chatToggleButton.style.right = '10px';
    chatToggleButton.onclick = function () {
        chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
    };
    document.body.appendChild(chatToggleButton);

    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && chatInput.value.trim() !== '') {
            let message = document.createElement('div');
            message.innerText = chatInput.value;
            message.style.borderBottom = '1px solid #ddd';
            message.style.marginBottom = '10px';
            chatMessages.appendChild(message);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
});

