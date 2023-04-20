// test basic attacks
<script>alert("This is a XSS Exploit Test")</script>

<iframe src="http://www.youtube.com"></iframe>

<script>alert(document.cookie)</script>

// test more tricky attacks
<img src=x onerror=\"alert('Please buy Leo's glasses!')\">

// including a frame with CSRF website

<iframe srcdoc="<script>
  if (window.confirm('Boost your business')) 
    {window.open('http://localhost:9000', '_blank');};
</script>"></iframe>
