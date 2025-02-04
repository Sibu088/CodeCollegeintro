document.addEventListener('DOMContentLoaded', () => {
    const topBar = document.querySelector('#top-bar');
    const exteriorColorSection = document.querySelector('#exterior-buttons');
    const interiorColorSection = document.querySelector('#interior-buttons');
    const exteriorImage = document.querySelector('#exterior-image');
    const interiorImage = document.querySelector('#interior-image');
    const wheelButtonsSection = document.querySelector('#wheel-buttons');
    const performanceBtn = document.querySelector('#performance-btn');
    const totalPriceElement = document.querySelector('#total-price');
    const fullSelfDrivingCheckbox = document.querySelector('#full-self-driving-checkbox');
    const accessoryCheckboxes = document.querySelectorAll('.accessory-form-checkbox');
    const downPaymentElement = document.querySelector('#down-payment');
    const monthlyPaymentElement = document.querySelector('#monthly-payment');
  
    const basePrice = 52490;
    let currentPrice = basePrice;
  
    let selectedColor = 'Stealth Grey';
    const selectedOptions = {
      'Performance Wheels': false,
      'Performance Package': false,
      'Full Self-Driving': false,
    };
  
    const pricing = {
      'Performance Wheels': 2500,
      'Performance Package': 5000,
      'Full Self-Driving': 8500,
      Accessories: {
        'Center Console Trays': 35,
        Sunshade: 105,
        'All-Weather Interior Liners': 225,
      },
    };
  
    // Update total price in the UI
    const updateTotalPrice = () => {
      currentPrice = basePrice;
  
      if (selectedOptions['Performance Wheels']) {
        currentPrice += pricing['Performance Wheels'];
      }
  
      if (selectedOptions['Performance Package']) {
        currentPrice += pricing['Performance Package'];
      }
  
      if (selectedOptions['Full Self-Driving']) {
        currentPrice += pricing['Full Self-Driving'];
      }
  
      accessoryCheckboxes.forEach((checkbox) => {
        const accessoryLabel = checkbox.closest('label').querySelector('span').textContent.trim();
        const accessoryPrice = pricing['Accessories'][accessoryLabel];
        if (checkbox.checked) {
          currentPrice += accessoryPrice;
        }
      });
  
      totalPriceElement.textContent = `$${currentPrice.toLocaleString()}`;
      updatePaymentBreakdown();
    };
  
    // Update payment breakdown based on current price
    const updatePaymentBreakdown = () => {
      const downPayment = currentPrice * 0.1;
      downPaymentElement.textContent = `$${downPayment.toLocaleString()}`;
  
      const loanTermMonths = 60;
      const interestRate = 0.03;
      const loanAmount = currentPrice - downPayment;
      const monthlyInterestRate = interestRate / 12;
  
      const monthlyPayment =
        (loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermMonths))) /
        (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
  
      monthlyPaymentElement.textContent = `$${monthlyPayment.toFixed(2).toLocaleString()}`;
    };
  
    // Handle Top Bar On Scroll
    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      topBar.classList.toggle('visible-bar', atTop);
      topBar.classList.toggle('hidden-bar', !atTop);
    };
  
    // Image Mapping for Exterior and Interior
    const exteriorImages = {
      'Stealth Grey': './images/model-y-stealth-grey.jpg',
      'Pearl White': './images/model-y-pearl-white.jpg',
      'Deep Blue': './images/model-y-deep-blue-metallic.jpg',
      'Solid Black': './images/model-y-solid-black.jpg',
      'Ultra Red': './images/model-y-ultra-red.jpg',
      Quicksilver: './images/model-y-quicksilver.jpg',
    };
  
    const interiorImages = {
      Dark: './images/model-y-interior-dark.jpg',
      Light: './images/model-y-interior-light.jpg',
    };
  
    // Handle Color Selection
    const handleColorButtonClick = (event) => {
      let button;
  
      if (event.target.tagName === 'IMG') {
        button = event.target.closest('button');
      } else if (event.target.tagName === 'BUTTON') {
        button = event.target;
      }
  
      if (button) {
        const buttons = event.currentTarget.querySelectorAll('button');
        buttons.forEach((btn) => btn.classList.remove('btn-selected'));
        button.classList.add('btn-selected');
  
        if (event.currentTarget === exteriorColorSection) {
          selectedColor = button.querySelector('img').alt;
          updateExteriorImage();
        }
  
        if (event.currentTarget === interiorColorSection) {
          const color = button.querySelector('img').alt;
          interiorImage.src = interiorImages[color];
        }
      }
    };
  
    // Update exterior image based on color and whether performance wheels are selected
    const updateExteriorImage = () => {
      const performanceSuffix = selectedOptions['Performance Wheels'] ? '-performance' : '';
      exteriorImage.src = exteriorImages[selectedColor].replace('.jpg', `${performanceSuffix}.jpg`);
    };
  
    // Wheel Selection
    const handleWheelButtonClick = (event) => {
      if (event.target.tagName === 'BUTTON') {
        const buttons = document.querySelectorAll('#wheel-buttons button');
        buttons.forEach((btn) => btn.classList.remove('bg-gray-700', 'text-white'));
  
        event.target.classList.add('bg-gray-700', 'text-white');
        selectedOptions['Performance Wheels'] = event.target.textContent.includes('Performance');
        updateExteriorImage();
        updateTotalPrice();
      }
    };
  
    // Performance Package Selection
    const handlePerformanceButtonClick = () => {
      const isSelected = performanceBtn.classList.toggle('bg-gray-700');
      performanceBtn.classList.toggle('text-white');
      selectedOptions['Performance Package'] = isSelected;
      updateTotalPrice();
    };
  
    // Full Self Driving Selection
    const fullSelfDrivingChange = () => {
      selectedOptions['Full Self-Driving'] = fullSelfDrivingCheckbox.checked;
      updateTotalPrice();
    };
  
    // Handle Accessory Checkbox Listeners
    accessoryCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', updateTotalPrice);
    });
  
    // Initial Update Total Price
    updateTotalPrice();
  
    // Event Listeners
    window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
    exteriorColorSection.addEventListener('click', handleColorButtonClick);
    interiorColorSection.addEventListener('click', handleColorButtonClick);
    wheelButtonsSection.addEventListener('click', handleWheelButtonClick);
    performanceBtn.addEventListener('click', handlePerformanceButtonClick);
    fullSelfDrivingCheckbox.addEventListener('change', fullSelfDrivingChange);
  });
  document.addEventListener('DOMContentLoaded', () => {
    const exteriorColorSection = document.querySelector('#exterior-buttons');
    const interiorColorSection = document.querySelector('#interior-buttons');
    const exteriorImage = document.querySelector('#exterior-image');
    const interiorImage = document.querySelector('#interior-image');
  
    // Image mapping
    const exteriorImages = {
      'Stealth Grey': './images/model-y-stealth-grey.jpg',
      'Pearl White': './images/model-y-pearl-white.jpg',
      'Deep Blue': './images/model-y-deep-blue-metallic.jpg',
      'Solid Black': './images/model-y-solid-black.jpg',
      'Ultra Red': './images/model-y-ultra-red.jpg',
      'Quicksilver': './images/model-y-quicksilver.jpg',
    };
  
    const interiorImages = {
      Dark: './images/model-y-interior-dark.jpg',
      Light: './images/model-y-interior-light.jpg',
    };
  
    // Handle Color Selection
    const handleColorButtonClick = (event) => {
      let button;
  
      if (event.target.tagName === 'IMG') {
        button = event.target.closest('button');
      } else if (event.target.tagName === 'BUTTON') {
        button = event.target;
      }
  
      if (button) {
        const buttons = event.currentTarget.querySelectorAll('button');
        buttons.forEach((btn) => btn.classList.remove('btn-selected'));
        button.classList.add('btn-selected');
  
        const color = button.querySelector('img').alt;
        if (event.currentTarget === exteriorColorSection) {
          // Change exterior image
          exteriorImage.src = exteriorImages[color];
        }
  
        if (event.currentTarget === interiorColorSection) {
          // Change interior image
          interiorImage.src = interiorImages[color];
        }
      }
    };
  
    // Event Listeners
    exteriorColorSection.addEventListener('click', handleColorButtonClick);
    interiorColorSection.addEventListener('click', handleColorButtonClick);
  });