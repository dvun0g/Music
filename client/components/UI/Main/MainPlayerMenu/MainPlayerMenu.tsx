import { FC, useEffect } from "react";
import cn from 'classnames';

import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

import MainPlayerItem from "../MainPlayerItem/MainPlayerItem";

import { MainPlayerMenuProps } from "./MainPlayerMenu.types";

import styles from './MainPlayerMenu.module.scss';

import previous from '../../../../assets/img/Main/previous.svg';
import next from '../../../../assets/img/Main/next.svg';
import playImg from '../../../../assets/img/Main/play.svg';
import pauseImg from '../../../../assets/img/Main/pause.svg';

let audio: HTMLAudioElement

const MainPlayerMenu: FC<MainPlayerMenuProps> = ({className, ...props}) => {

    const {activeSong} = useTypedSelector(state => state.song)
    const {play} = useTypedSelector(state => state.audio)    
    
    const {audioPlay, audioPause} = useActions()

    useEffect(() => {
        audio ? setAudio() : audio = new Audio()
    }, [activeSong])

    const setAudio = () => {
        if (activeSong) {
            audio.src = `http://localhost:8000/audio/${activeSong.audio}`  
            audio.pause()
            audioPause()
            audio.play()
            audioPlay()          
        }
    }

    const handlePlay = () => {
        if (play) {
            audio.pause()
            audioPause()
        } else {
            audio.play()
            audioPlay()
        }
    }

    return (
        <div 
         className={cn(className, styles.Container)}
         {...props}>
                <div className={styles.Duration}>Длительность</div>
                <div className={styles.BlockButton}>
                    <MainPlayerItem img={previous}/>
                    <MainPlayerItem 
                     img={!play ? playImg : pauseImg} 
                     size='m' 
                     color='o'
                     onClick={handlePlay}
                     className={play ? styles.Pause: ''}/>
                    <MainPlayerItem img={next}/>
                </div>
                <div className={styles.Volume}>Громкость</div>
        </div>
    )
}

export default MainPlayerMenu;