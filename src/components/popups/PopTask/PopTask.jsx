import { useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import {
  Block,
  BlockCategoriesBot,
  BtnBlue,
  BtnBlueLink,
  BtnWhite,
  BtnWhiteLink,
  ButtonsBlock,
  CategoriesBotTitle,
  CategoriesTheme,
  Container,
  Content,
  Form,
  FormArea,
  FormBlock,
  FormTitle,
  Header,
  SPopTask,
  Status,
  StatusTheme,
  StatusThemes,
  StatusThemeText,
  StatusTitle,
  ThemeText,
  Title,
  Wrap,
} from "./PopTask.styled";
import { cards } from "../../../../data";

function PopTask({ isShow }) {
  const { id } = useParams();
  const card = cards.find((card) => card.id === id);
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const components = statuses
    .filter((status) => status !== card.status)
    .map((status, index) => (
      <StatusTheme key={index} $isHide={true}>
        <StatusThemeText>{status}</StatusThemeText>
      </StatusTheme>
    ));

  return (
    <SPopTask id="popBrowse" $isShow={isShow}>
      <Container>
        <Block>
          <Content>
            <Header>
              <Title>Название задачи</Title>
              <CategoriesTheme $isTop={true} $color={card.topic}>
                <ThemeText $color={card.topic}>{card.topic}</ThemeText>
              </CategoriesTheme>
            </Header>

            <Status>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                <StatusTheme $isHide={false}>
                  <StatusThemeText>{card.status}</StatusThemeText>
                </StatusTheme>
                {components}
              </StatusThemes>
            </Status>

            <Wrap>
              <Form id="formBrowseCard" action="#">
                <FormBlock>
                  <FormTitle htmlFor="textArea01">Описание задачи</FormTitle>
                  <FormArea
                    name="text"
                    id="textArea01"
                    placeholder="Введите описание задачи..."
                    readOnly
                  />
                </FormBlock>
              </Form>
              <Calendar />
            </Wrap>

            <BlockCategoriesBot>
              <CategoriesBotTitle>Категория</CategoriesBotTitle>
              <CategoriesTheme $isTop={false} $color={card.topic}>
                <ThemeText $color={card.topic}>{card.topic}</ThemeText>
              </CategoriesTheme>
            </BlockCategoriesBot>

            <ButtonsBlock $isShow={true}>
              <div>
                <BtnWhite>
                  <BtnWhiteLink>Редактировать задачу</BtnWhiteLink>
                </BtnWhite>
                <BtnWhite>
                  <BtnWhiteLink>Удалить задачу</BtnWhiteLink>
                </BtnWhite>
              </div>
              <BtnBlue>
                <BtnBlueLink to="/">Закрыть</BtnBlueLink>
              </BtnBlue>
            </ButtonsBlock>

            <ButtonsBlock $isShow={false}>
              <div>
                <BtnBlue style={{ marginRight: "8px" }}>
                  <BtnBlueLink>Сохранить</BtnBlueLink>
                </BtnBlue>
                <BtnWhite>
                  <BtnWhiteLink>Отменить</BtnWhiteLink>
                </BtnWhite>
                <BtnWhite>
                  <BtnWhiteLink>Удалить задачу</BtnWhiteLink>
                </BtnWhite>
              </div>
              <BtnBlue>
                <BtnBlueLink to="/">Закрыть</BtnBlueLink>
              </BtnBlue>
            </ButtonsBlock>
          </Content>
        </Block>
      </Container>
    </SPopTask>

    // <div className="pop-browse" id="popBrowse">
    //   <div className="pop-browse__container">
    //     <div className="pop-browse__block">
    //       <div className="pop-browse__content">
    //         <div className="pop-browse__top-block">
    //           <h3 className="pop-browse__ttl">Название задачи</h3>
    //           <div className="categories__theme theme-top _orange _active-category">
    //             <p className="_orange">Web Design</p>
    //           </div>
    //         </div>

    //         <div className="pop-browse__status status">
    //           <p className="status__p subttl">Статус</p>
    //           <div className="status__themes">
    //             <div className="status__theme _hide">
    //               <p>Без статуса</p>
    //             </div>
    //             <div className="status__theme _gray">
    //               <p className="_gray">Нужно сделать</p>
    //             </div>
    //             <div className="status__theme _hide">
    //               <p>В работе</p>
    //             </div>
    //             <div className="status__theme _hide">
    //               <p>Тестирование</p>
    //             </div>
    //             <div className="status__theme _hide">
    //               <p>Готово</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="pop-browse__wrap">
    //           <form
    //             className="pop-browse__form form-browse"
    //             id="formBrowseCard"
    //             action="#"
    //           >
    //             <div className="form-browse__block">
    //               <label htmlFor="textArea01" className="subttl">
    //                 Описание задачи
    //               </label>
    //               <textarea
    //                 className="form-browse__area"
    //                 name="text"
    //                 id="textArea01"
    //                 readOnly
    //                 placeholder="Введите описание задачи..."
    //               ></textarea>
    //             </div>
    //           </form>
    //           <Calendar />
    //         </div>

    //         <div className="theme-down__categories theme-down">
    //           <p className="categories__p subttl">Категория</p>
    //           <div className="categories__theme _orange _active-category">
    //             <p className="_orange">Web Design</p>
    //           </div>
    //         </div>

    //         <div className="pop-browse__btn-browse ">
    //           <div className="btn-group">
    //             <button className="btn-browse__edit _btn-bor _hover03">
    //               <a href="#">Редактировать задачу</a>
    //             </button>
    //             <button className="btn-browse__delete _btn-bor _hover03">
    //               <a href="#">Удалить задачу</a>
    //             </button>
    //           </div>
    //           <button className="btn-browse__close _btn-bg _hover01">
    //             <a href="#">Закрыть</a>
    //           </button>
    //         </div>

    //         <div className="pop-browse__btn-edit _hide">
    //           <div className="btn-group">
    //             <button className="btn-edit__edit _btn-bg _hover01">
    //               <a href="#">Сохранить</a>
    //             </button>
    //             <button className="btn-edit__edit _btn-bor _hover03">
    //               <a href="#">Отменить</a>
    //             </button>
    //             <button
    //               className="btn-edit__delete _btn-bor _hover03"
    //               id="btnDelete"
    //             >
    //               <a href="#">Удалить задачу</a>
    //             </button>
    //           </div>
    //           <button className="btn-edit__close _btn-bg _hover01">
    //             <a href="#">Закрыть</a>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default PopTask;
