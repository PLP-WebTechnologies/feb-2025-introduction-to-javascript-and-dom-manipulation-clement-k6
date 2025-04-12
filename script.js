// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'Text has been changed dynamically!';
  });
  
  // Modify CSS styles via JavaScript
  document.getElementById('change-style-btn').addEventListener('click', () => {
    const contentSection = document.querySelector('.content');
    contentSection.style.backgroundColor = '#d4edda';
    contentSection.style.border = '2px solid #28a745';
  });
  
  // Add a new element
  document.getElementById('add-item-btn').addEventListener('click', () => {
    const container = document.getElementById('item-container');
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.textContent = `New Item ${container.children.length + 1}`;
    container.appendChild(newItem);
  });
  
  // Remove the last element
  document.getElementById('remove-item-btn').addEventListener('click', () => {
    const container = document.getElementById('item-container');
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    } else {
      alert('No items to remove!');
    }
  });