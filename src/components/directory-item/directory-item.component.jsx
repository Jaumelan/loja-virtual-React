import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles.js";

const DirectoryItem = ({ category }) => {
  const { imageUrl, id, title } = category;

  return (
    <DirectoryItemContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
