import LottieView from 'lottie-react-native';

const LoadingView = ()=>{
    return <LottieView
        source={require('assets/images/loading_animation.json')}
        autoPlay
        loop
        style={{width:100, height:100}}
        />
}
export  default LoadingView;