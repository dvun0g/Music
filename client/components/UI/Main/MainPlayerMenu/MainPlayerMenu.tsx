import { ChangeEvent, FC, useEffect } from "react";
import cn from 'classnames';

import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

import MainPlayerItem from "../MainPlayerItem/MainPlayerItem";
import MainPlayerProgress from "../MainPlayerProgress/MainPlayerProgress";

import { MainPlayerMenuProps } from "./MainPlayerMenu.types";

import styles from './MainPlayerMenu.module.scss';

import previous from '../../../../assets/img/Main/previous.svg';
import next from '../../../../assets/img/Main/next.svg';
import playImg from '../../../../assets/img/Main/play.svg';
import pauseImg from '../../../../assets/img/Main/pause.svg';
import volumeImg from '../../../../assets/img/Main/volume.svg';

let audio: HTMLAudioElement

const MainPlayerMenu: FC<MainPlayerMenuProps> = ({className, ...props}) => {

    const {activeSong} = useTypedSelector(state => state.song)
    const {play, volume, duration, currentTime} = useTypedSelector(state => state.audio)    
    
    const {audioPlay, audioPause, audioSetVolume, audioSetDuration, audioSetCurrentTime} = useActions()

    useEffect(() => {
        audio ? setAudio() : audio = new Audio()
    }, [activeSong])

    const setAudio = () => {
        if (activeSong) {
            audio.src = `http://localhost:8000/audio/${activeSong.audio}`  
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                audioSetDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                audioSetCurrentTime(Math.ceil(audio.currentTime))
            }
            if (play) {
                audio.pause()
                audioPause()    
            } 
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

    const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
        audioSetVolume(+e.currentTarget.value)
        audio.volume = +e.currentTarget.value / 100
    }

    const handleCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
        audioSetCurrentTime(Math.ceil(+e.currentTarget.value))
        audio.currentTime = +e.currentTarget.value
    }

    return (
        <div 
         className={cn(className, styles.Container)}
         {...props}>
                <MainPlayerProgress 
                    left={currentTime} 
                    rigth={duration} 
                    image={volumeImg} 
                    onChange={handleCurrentTime} 
                    value={currentTime}/>
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
                <MainPlayerProgress 
                    left={volume} 
                    rigth={100} 
                    image={volumeImg} 
                    onChange={handleVolume} 
                    value={volume}/>
        </div>
    )
}

export default MainPlayerMenu;