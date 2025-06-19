import Calendar from "../Calendar/Calendar.jsx";
import {
  Block,
  Categories,
  CategoriesThemes,
  CategoriesTitle,
  CloseBtn,
  Container,
  Content,
  CreateNewTaskBtn,
  Form,
  FormArea,
  FormBlock,
  FormInput,
  FormTitle,
  SPopNewTask,
  Theme,
  ThemeText,
  Title,
  Wrap,
} from "./PopNewTask.styled.js";

function PopNewTask({ isShow }) {
  return (
    <SPopNewTask id="popNewCard" $isShow={isShow}>
      <Container>
        <Block>
          <Content>
            <Title>Создание задачи</Title>
            <CloseBtn to="/">&#10006;</CloseBtn>
            <Wrap>
              <Form id="formNewTask">
                <FormBlock>
                  <FormTitle htmlFor="formTitle">Название задачи</FormTitle>
                  <FormInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                  />
                </FormBlock>
                <FormBlock>
                  <FormTitle htmlFor="textArea">Описание задачи</FormTitle>
                  <FormArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </FormBlock>
              </Form>
              <Calendar />
            </Wrap>
            <Categories>
              <CategoriesTitle>Категория</CategoriesTitle>
              <CategoriesThemes>
                <Theme $color="orange" $isActive={true}>
                  <ThemeText $color="orange">Web Design</ThemeText>
                </Theme>
                <Theme $color="green">
                  <ThemeText $color="green">Research</ThemeText>
                </Theme>
                <Theme $color="purple">
                  <ThemeText $color="purple">Copywriting</ThemeText>
                </Theme>
              </CategoriesThemes>
            </Categories>
            <CreateNewTaskBtn id="btnCreate">Создать задачу</CreateNewTaskBtn>
          </Content>
        </Block>
      </Container>
    </SPopNewTask>
    // <div className="pop-new-card" id="popNewCard">
    //   <div className="pop-new-card__container">
    //     <div className="pop-new-card__block">
    //       <div className="pop-new-card__content">
    //         <h3 className="pop-new-card__ttl">Создание задачи</h3>
    //         <a href="#" className="pop-new-card__close">
    //           &#10006;
    //         </a>

    //         <div className="pop-new-card__wrap">
    //           <form
    //             className="pop-new-card__form form-new"
    //             id="formNewCard"
    //             action="#"
    //           >
    //             <div className="form-new__block">
    //               <label htmlFor="formTitle" className="subttl">
    //                 Название задачи
    //               </label>
    //               <input
    //                 className="form-new__input"
    //                 type="text"
    //                 name="name"
    //                 id="formTitle"
    //                 placeholder="Введите название задачи..."
    //                 autoFocus
    //               />
    //             </div>

    //             <div className="form-new__block">
    //               <label htmlFor="textArea" className="subttl">
    //                 Описание задачи
    //               </label>
    //               <textarea
    //                 className="form-new__area"
    //                 name="text"
    //                 id="textArea"
    //                 placeholder="Введите описание задачи..."
    //               ></textarea>
    //             </div>
    //           </form>
    //           <Calendar />
    //         </div>

    //         <div className="pop-new-card__categories categories">
    //           <p className="categories__p subttl">Категория</p>
    //           <div className="categories__themes">
    //             <div className="categories__theme _orange _active-category">
    //               <p className="_orange">Web Design</p>
    //             </div>
    //             <div className="categories__theme _green">
    //               <p className="_green">Research</p>
    //             </div>
    //             <div className="categories__theme _purple">
    //               <p className="_purple">Copywriting</p>
    //             </div>
    //           </div>
    //         </div>

    //         <button className="form-new__create _hover01" id="btnCreate">
    //           Создать задачу
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PopNewTask;
