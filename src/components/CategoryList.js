// CategoryList.js

import React from 'react';

const categories = ['액션', '공포', 'FPS', '카테고리 4'];

function CategoryList() {
  return (
    <div className="left-panel">
      {categories.map((category, index) => (
        <div className="category-item" key={index}>
          {category}
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
