// src/components/DropdownMenu.tsx
import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import useDropdown from "src/hooks/useDropdown";
import { CONFIG } from 'site.config';
import StyledDropdown from './StyledDropdown';

const DropdownMenu: React.FC = () => {
  const [menuRef, isDropdownOpened, onOpenBtn] = useDropdown();
  const [currentTitle, setCurrentTitle] = useState(CONFIG.blog.title);

  const handleTitleChange = (newTitle: string, path: string) => {
    setCurrentTitle(newTitle);
    router.push(path);
  };

  useEffect(() => {
    // 페이지 변경 시 현재 타이틀 업데이트 (선택 사항)
    setCurrentTitle(CONFIG.blog.title); 
  }, [router.asPath]); 

  return (
    <StyledDropdown ref={menuRef}>
      <button onClick={onOpenBtn} className="title">
        {currentTitle} ▾ 
      </button>
      {isDropdownOpened && (
        <ul className="menu">
          <li onClick={() => handleTitleChange(CONFIG.blog.title, '/')}>
            <Link href="/">{CONFIG.blog.title}</Link> 
          </li>
          <li onClick={() => handleTitleChange("권돌의 공구함", '/new-page')}>
            <Link href="/new-page">권돌의 공구함</Link> 
          </li>
        </ul>
      )}
    </StyledDropdown>
  );
};

// ... (스타일 코드는 이전 답변과 동일)

export default DropdownMenu;
