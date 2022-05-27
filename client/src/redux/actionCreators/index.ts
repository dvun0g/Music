import * as ThemeActions from './Theme/ThemeActionCreator';
import * as SongActions from './Song/SongActionCreator';
import * as AudioActions from './Audio/AudioActionCreator';
import * as AuthActions from './Auth/AuthActionCreator';

export default {
    ...ThemeActions,
    ...SongActions,
    ...AudioActions,
    ...AuthActions,
}