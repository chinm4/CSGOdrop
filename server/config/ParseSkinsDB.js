
import SkinsDB from './SkinsDB';

const ParseSkinDB = (SkinsDB) => {
  SkinsDB.forEach(obj => {
    console.log(obj.skinName);
  })
}

ParseSkinDB(SkinsDB);