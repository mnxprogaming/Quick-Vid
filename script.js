// 1. Language Dropdown Logic
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const langItems = langMenu.querySelectorAll('li');

// Button par click karne se menu khulega
langBtn.addEventListener('click', function(e) {
    e.stopPropagation(); 
    langMenu.classList.toggle('show');
});

// List mein kisi bhasha par tap karne par
langItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.stopPropagation(); 
        
        // Button ka text aur icon update karein
        langBtn.innerHTML = this.innerText + ' <i class="fa-solid fa-chevron-down" style="font-size:10px;"></i>';
        
        // Sabhi se active color hatayein
        langItems.forEach(li => li.classList.remove('active'));
        
        // Jise select kiya hai use active karein
        this.classList.add('active');
        
        // Menu band karein
        langMenu.classList.remove('show'); 
    });
});

// Bahar click karne par menu band ho jaye
document.addEventListener('click', function() {
    if (langMenu.classList.contains('show')) {
        langMenu.classList.remove('show');
    }
});

// 2. Clear (Cross ❌) Button Logic
const videoUrlInput = document.getElementById('videoUrl');
const clearBtn = document.getElementById('clearBtn');

if (videoUrlInput && clearBtn) {
    // Jab input box mein kuch type ho
    videoUrlInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            clearBtn.style.display = 'block'; 
        } else {
            clearBtn.style.display = 'none';  
        }
    });

    // Jab cross icon par click ho
    clearBtn.addEventListener('click', function() {
        videoUrlInput.value = ''; 
        clearBtn.style.display = 'none'; 
        videoUrlInput.focus(); 
    });
}
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('fa-bars');
        menuToggle.classList.toggle('fa-xmark');
        
        // Yeh lock code click event ke ANDAR hona chahiye
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; 
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
    });
}
