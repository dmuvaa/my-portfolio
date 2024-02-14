import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

let overscrollOptions = {
    enable: true,
    effect: 'bounce',
    damping: 0.15,
    maxOverScroll: 150
}

let options = {
    damping: 0.07,
    plugins: {
        overscroll: {...overscrollOptions}
    }
}

const Scroll = () => {

    useEffect(() => {
        Scrollbar.use(OverscrollPlugin)
        Scrollbar.init(document.body, options);

        return () => {
            if (Scrollbar) Scrollbar.destroy(document.body);
        }
    },[])
    return null;
}
export default Scroll;


