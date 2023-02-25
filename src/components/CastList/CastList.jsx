import { Character, Image, Item, List, Name } from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(({ profile_path, id, name, character }) => {
        return (
          <Item key={id}>
            <Image
              src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
              alt={name}
            />
            <Name>{name}</Name>
            <Character>
              Character: <p>{character}</p>
            </Character>
          </Item>
        );
      })}
    </List>
  );
};
