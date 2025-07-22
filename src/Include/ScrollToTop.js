

import { useLayoutEffect, useState } from 'react';
function ScrollToTop() {
  const [count, setCount] = useState(0);


  
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [count]);

  return (
    <div>
        
        <div id="scrollUp" class="scrollUp oranage" onClick={() => setCount(count + 1)} style={{ display: 'block' }}>
                <i class="fa fa-angle-up"></i>
            </div>
   
    </div>
  );
}

export default ScrollToTop


