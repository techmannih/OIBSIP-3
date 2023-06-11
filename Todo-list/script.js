window.addEventListener('load', () => {
    const form = document.querySelector("#new-topic-form");
    const input = document.querySelector("#new-topic-input");
    const list_el = document.querySelector("#topics");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const topic = input.value;

        const topic_el = document.createElement('div');
        topic_el.classList.add('topic');

        const topic_content_el = document.createElement('div');
        topic_content_el.classList.add('content');

        topic_el.appendChild(topic_content_el);

        const topic_input_el = document.createElement('input');
        topic_input_el.classList.add('text');
        topic_input_el.type = 'text';
        topic_input_el.value = topic;
        topic_input_el.setAttribute('readonly', 'readonly');

        topic_content_el.appendChild(topic_input_el);

        const topic_actions_el = document.createElement('div');
        topic_actions_el.classList.add('actions');

        const topic_update_el = document.createElement('button');
        topic_update_el.classList.add('update');
        topic_update_el.innerText = 'Update';

        const topic_delete_el = document.createElement('button');
        topic_delete_el.classList.add('delete');
        topic_delete_el.innerText = 'Delete';

        topic_actions_el.appendChild(topic_update_el);
        topic_actions_el.appendChild(topic_delete_el);

        topic_el.appendChild(topic_actions_el);

        list_el.appendChild(topic_el);

        input.value = '';

        topic_update_el.addEventListener('click', (e) => {
            if (topic_update_el.innerText.toLowerCase() == "update") {
                topic_update_el.innerText = "Save";
                topic_input_el.removeAttribute("readonly");
                topic_input_el.focus();
            } else {
                topic_update_el.innerText = "Update";
                topic_input_el.setAttribute("readonly", "readonly");
            }
        });

        topic_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(topic_el);
        });
    });
});