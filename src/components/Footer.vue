<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-brand">
                <img src="/rawty-shawty-2.png" alt="My Website" class="logo" />
                <p class="brand-description">
                    Your trusted partner for amazing experiences.
                </p>
                <div class="socials">
                    <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                        <IconFa6BrandsFacebook color="#0A3E36" width="20" height="20" />
                    </a>
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                        <IconFa6BrandsXTwitter color="#0A3E36" width="20" height="20" />
                    </a>
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                        <IconFa6BrandsInstagram color="#0A3E36" width="20" height="20" />
                    </a>
                </div>
            </div>

            <div class="footer-links">
                <div class="link-column">
                    <h4>Our Company</h4>
                    <router-link to="/about">About</router-link>
                    <a href="#">Our Journey</a>
                </div>

                <div class="link-column">
                    <h4>Careers</h4>
                    <a href="#">Job Openings</a>
                    <a href="#">Corporate</a>
                    <a href="#">Restaurant</a>
                </div>

                <div class="link-column">
                    <h4>Contact Us</h4>
                    <router-link to="/contact">contact</router-link>
                    <a href="#">Suggestion</a>
                    <a href="#">Complaint</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Rawty Shawty. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
    background-color: #0A3E36;
    color: #FAF4E5;
    padding: 40px 20px 20px;
}

.footer-content {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-brand {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    max-width: 300px;
}

.logo {
    width: 100px;
    height: auto;
}

.brand-description {
    font-family: 'Russo One', sans-serif;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    opacity: 0.9;
}

.socials {
    display: flex;
    gap: 12px;
}

.socials a {
    background-color: #FAF4E5;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.3s ease;
}

.socials a:hover {
    background-color: #fcedcf;
    transform: translateY(-2px);
}

.footer-links {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

.link-column {
    min-width: 150px;
}

.footer-links h4 {
    margin-bottom: 12px;
    font-family: 'Zen Dots', sans-serif;
    font-size: 16px;
    color: #FAF4E5;
}

.footer-links a {
    display: block;
    color: #FAF4E5;
    text-decoration: none;
    margin-bottom: 8px;
    transition: all 0.3s ease;
    font-family: 'Russo One', sans-serif;
    font-weight: 400;
    font-size: 14px;
    opacity: 0.9;
}

.footer-links a:hover {
    color: #fcedcf;
    padding-left: 5px;
}

.footer-bottom {
    border-top: 1px solid rgba(250, 244, 229, 0.2);
    margin-top: 30px;
    padding-top: 20px;
    text-align: center;
}

.footer-bottom p {
    margin: 0;
    font-family: 'Russo One', sans-serif;
    font-size: 14px;
    opacity: 0.8;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        gap: 30px;
    }

    .footer-links {
        gap: 30px;
    }

    .link-column {
        min-width: 120px;
    }
}
</style>