// pages/new-page.tsx
import { NextPageWithLayout } from '../../src/types';

const NewPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>권돌의 공구함</h1>
      {/* 페이지 내용 추가 */}
    </div>
  );
};

// Header 컴포넌트를 재사용하기 위한 getLayout 함수
NewPage.getLayout = (page) => {
  return (
    <>
      {/* 필요한 MetaConfig 컴포넌트 추가 */}
      {page}
    </>
  );
};

export default NewPage;
