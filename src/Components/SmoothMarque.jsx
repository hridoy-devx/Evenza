import React from 'react';

function SmoothMarquee() {
  const list = [
    "Latest Updates", 
    "New Announcements", 
    "Workshop Alerts", 
    "Live Notices", 
    "Event Countdown",
    "Special Offer Available",
    "Upcoming Tech Summit",
    "Class Schedule Updated",
    "Registration Open Now",
    "Important Notice For All"
  ];

  return (
    <div style={styles.container}>
      <div style={styles.track}>
        {list.concat(list).map((text, i) => (
          <span key={i} style={styles.textItem}>
            * {text}
          </span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#7c3aed',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: '16px 0',
    width: '100%',
  },
  track: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    animation: 'marqueeScroll 25s linear infinite', 
  },
  textItem: {
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '600',
    padding: '0 30px',
    display: 'inline-block',
  }
};

// Keyframes for smooth sliding from right to left

if (typeof document !== 'undefined') {
  const sheet = document.styleSheets[0] || document.head.appendChild(document.createElement('style')).sheet;
  try {
    sheet.insertRule(`
      @keyframes marqueeScroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `, sheet.cssRules.length);
  } catch (e) {}
}

export default SmoothMarquee;