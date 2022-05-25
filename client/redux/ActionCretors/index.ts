import * as ThemeActions from './Theme/ThemeActionCretor';
import * as SongActions from './Song/SongActionCretor';
import * as AudioActions from './Audio/AudioActionCretor'

export default {
    ...ThemeActions,
    ...SongActions,
    ...AudioActions,
    
}