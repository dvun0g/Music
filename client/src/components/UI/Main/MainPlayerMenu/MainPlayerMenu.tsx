import { ChangeEvent, FC, useEffect } from "react";
import cn from 'classnames';

import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

import MainPlayerItem from "../MainPlayerItem/MainPlayerItem";
import MainPlayerProgress from "../MainPlayerProgress/MainPlayerProgress";

import { MainPlayerMenuProps } from "./MainPlayerMenu.types";

import styles from './MainPlayerMenu.module.scss';

import previous from '../../../../assets/img//previous.svg';
import next from '../../../../assets/img//next.svg';
import playImg from '../../../../assets/img//play.svg';
import pauseImg from '../../../../assets/img//pause.svg';
import volumeDown from '../../../../assets/img//volumeDown.svg';
import volumeUp from '../../../../assets/img//volumeUp.svg';

let audio: HTMLAudioElement

const MainPlayerMenu: FC<MainPlayerMenuProps> = ({className, ...props}) => {

    const {activeSong, songs} = useTypedSelector(state => state.song)
    const {play, 
           volume, 
           duration, 
           currentTime} = useTypedSelector(state => state.audio)    
    
    const {audioPlay, 
           audioPause, 
           audioSetVolume, 
           audioSetDuration, 
           audioSetCurrentTime,
           songSetNext} = useActions()

    useEffect(() => {
        audio ? setAudio() : audio = new Audio()
    }, [activeSong])

    useEffect(() => {
        if (duration === currentTime) {
            activeSong && songSetNext(songs, activeSong, 'n')
        }
    }, [duration, currentTime])

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
        } else {
            audio.src = ''
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

    const handleNextSong = (type: 'n' | 'p') => {
        if (activeSong) {
            songSetNext(songs, activeSong, type)
        }
    }

    return (
        <div 
         className={cn(className, styles.Container, {
             [styles.Disabled]: !activeSong,
         })}
         {...props}>
                <div className={styles.BlockButton}>
                    <MainPlayerItem 
                     img={previous} 
                     position='l'
                     disabled={!activeSong ? true : false}
                     onClick={() => handleNextSong('p')}/>
                    <MainPlayerItem 
                     className={play ? styles.Pause: ''}
                     img={!play ? playImg : pauseImg} 
                     size='m' 
                     color='o'
                     disabled={!activeSong ? true : false}
                     onClick={handlePlay}/>
                    <MainPlayerItem 
                     img={next} 
                     position='r'
                     disabled={!activeSong ? true : false}
                     onClick={() => handleNextSong('n')}/>
                </div>
                <MainPlayerProgress 
                 left={volume} 
                 rigth={100} 
                 image01={volumeDown} 
                 image02={volumeUp}
                 disabled={!activeSong ? true : false}
                 onChange={handleVolume} 
                 value={volume}/>
                <MainPlayerProgress 
                 left={currentTime} 
                 rigth={duration} 
                 disabled={!activeSong ? true : false}
                 onChange={handleCurrentTime} 
                 value={currentTime}/>
        </div>
    )
}

export default MainPlayerMenu;