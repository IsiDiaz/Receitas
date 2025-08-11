 document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('.recipe-image img');
            
            images.forEach(img => {
                img.addEventListener('mouseover', function() {
                    this.style.transform = 'scale(1.02)';
                    this.style.transition = 'transform 0.3s ease';
                });
                
                img.addEventListener('mouseout', function() {
                    this.style.transform = 'scale(1)';
                });
            });
        

