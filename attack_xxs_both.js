// test basic attacks
<script>alert("This is a XSS Exploit Test")</script>

<iframe src="http://www.youtube.com"></iframe>

<script>alert(document.cookie)</script>

// test more tricky attacks
<img src=x onerror=\"alert('Please buy shimmer's glasses!')\">
