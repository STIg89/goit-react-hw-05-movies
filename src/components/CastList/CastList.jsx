import { Character, Image, Item, List, Name } from './CastList.styled';
import noPoster from 'img/sorry.png';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(({ profile_path, id, name, character }) => {
        return (
          <Item key={id}>
            <Image
              src={
                profile_path !== null
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : noPoster
              }
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
