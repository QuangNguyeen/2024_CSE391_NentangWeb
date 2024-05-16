tinymce.init({
    selector: 'textarea',
    width: 465, // Độ rộng
    height: 250, // Độ cao
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
        { value: 'First.Name', title: 'First Name' },
        { value: 'Email', title: 'Email' },
    ],
    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
});
const captchaCanvas = document.getElementById('captcha-image');
const captchaInput = document.getElementById('captcha-input');
const checkButton = document.getElementById('check-button');

const generateCaptcha = () => {
    const ctx = captchaCanvas.getContext('2d');
    ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);

    // Generate random text
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for (let i = 0; i < 6; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Draw the text with distortion and noise
    ctx.font = '30px Arial';
    for (let i = 0; i < captchaText.length; i++) {
        const x = 10 + i * 30;
        const y = 40;
        ctx.rotate(Math.random() * 0.1);
        ctx.fillText(captchaText[i], x, y);
        ctx.rotate(-Math.random() * 0.1);
    }

    // Add some noise lines
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
        ctx.lineTo(Math.random() * captchaCanvas.width, Math.random() * captchaCanvas.height);
        ctx.stroke();
    }

    // Set the generated text as the answer
    captchaInput.dataset.answer = captchaText;
};

generateCaptcha();

checkButton.addEventListener('click', () => {
    const userAnswer = captchaInput.value.toUpperCase();
    const correctAnswer = captchaInput.dataset.answer;
    if (userAnswer === correctAnswer) {
        // Form submission logic (replace with your form handling)
        alert('Form submitted successfully!');
    } else {
        alert('Incorrect Captcha! Please try again.');
        generateCaptcha(); // Generate new captcha on wrong answer
    }
});