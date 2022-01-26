import React, {useState, useEffect } from 'react';
import 'rc-slider/assets/index.css';
import RangeSlider from "../components/ranges";
import Resultcard from "../components/resultcard/Resultcard";
import ColorsCant from "../components/colorsCant";
import TypeTape from "../components/TypeTape";
import MountType from "../components/mountType";
import UrlImages from "../images";
import images from "../images/images";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {Pagination,Navigation} from 'swiper';
SwiperCore.use([Pagination,Navigation]);
// swiper

export function App() {

    const [state, setState] = useState({

        titleColorCant: 'Выберите цвет канта',
        checkedColor: 'brown',
        cantColors: {
            white: {
                class: 'boxWhite',
                title: 'Белый'
            },
            brown: {
                class: 'boxBrown',
                title: 'Коричневый'
            },
            gray: {
                class: 'boxGray',
                title: 'Серый'
            },
            beige: {
                class: 'boxBeige',
                title: 'Бежевый'
            },
            green: {
                class: 'boxGreen',
                title: 'Зеленый'
            },
            blue: {
                class: 'boxBlue',
                title: 'Синий'
            },
            red: {
                class: 'boxRed',
                title: 'Бордо'
            }
        },



        typeTapeTitle: 'Выберите тип пленки',
        checkedTape: 'weight500',
        typeTape: {
            weight500: {
                class: 'tape500',
                title: 'Плёнка 500 мкр',
                imgSrc: UrlImages.tapeWeight500,
            },
            weight700: {
                class: 'tape700',
                title: 'Плёнка 700 мкр',
                imgSrc: UrlImages.tapeWeight700,
            },
            weight700Toning: {
                class: 'tape700tone',
                title: 'Плёнка тон. 700 мкр',
                imgSrc: UrlImages.tapeWeight700Tone,
            },
            mosquit700: {
                class: 'mosquit',
                title: 'Москитная сетка ПВХ 700 мкр',
                imgSrc: UrlImages.tapeMosquit,
            }
        },

        mountingTypeTitle: 'Выберите тип крепления',
        checkedMountType: 'grommet',
        allowTypes: ['grommet'],
        mountingType: {
            grommet: {
                title: 'Люверс',
                imgSrc: UrlImages.grommet,
            },
            beltBracket:{
                title: 'Ремень-скоба',
                imgSrc: UrlImages.beltBracket,
            },
            swivelBracket:{
                title: 'Поворотная скоба',
                imgSrc: UrlImages.swivelBracket,
            },
            frenchLock: {
                title: 'Франц. замок',
                imgSrc: UrlImages.frenchLock,
            },
            yachtingLock: {
                title: 'Яхтенный замок',
                imgSrc: UrlImages.yachtingLock,
            }
        },


        zipperTitle: 'С молнией',
        checkedZipper: false,
        mainImage: {
            title: 'Мягкие окна'
        },


        deliveryTitle: 'Варианты доставки',
        checkedDelivery: 'pickup',
        lengthDelivery: 1,
        deliveryType: {
            pickup: {
                title: 'Самовывоз',
                className: '',
                checked: false
            },
            deliveryStPetersburg: {
                title: 'Доставка по СПБ',
                className: '',
                checked: false
            },
            DeliveryForRoad: {
                title: 'Доставка за КАД',
                className: '',
                checked: false
            },
        },


        inputWidth: {
            class: 'initial_investment_amount',
            title: 'Ширина (20-1000 см)',
            titleInput: 'Ширина',
            min: 20,
            max: 1000,
            step: 10,
            value: 100,
            measure: 'см'
        },


        inputHeight: {
            class: 'inputHeight',
            title: 'Высота (20-1000 см)',
            titleInput: 'Высота',
            min: 20,
            max: 1000,
            step: 10,
            value: 100,
            measure: 'см'
        },

        inputZipper: {
            class: 'inputZipper',
            title: 'Длина молнии',
            titleInput: 'Длина молнии',
            min: 20,
            max: 1000,
            step: 10,
            value: 20,
            measure: 'см'
        },


        priceLoaded: false,
        result: {
            price: 0,
            deliveryCity: 500,
            deliveryCityMin: 500,
            deliveryCityKm: 25,
            enterLock: 1450,
            mosquitBeltBracket: 1600,
            mosquitFrenchLock: 1890,
            mosquitGrommet: 1300,
            mosquitSwivelBracket: 1740,
            mosquitYachtingLock: 2330,
            tape500grommet: 870,
            tape700beltBracket: 1450,
            tape700frenchLock: 1740,
            tape700grommet: 1160,
            tape700swivelBracket: 1600,
            tape700tonbeltBracket: 1600,
            tape700tonfrenchLock: 1890,
            tape700tongrommet: 1300,
            tape700tonswivelBracket: 1740,
            tape700tonyachtingLock: 2330,
            tape700yachtingLock: 2180,
            adminEmail: ''
        },
        saveResultChecked: false,
        mail: {
            textBtn: 'Отправить',
            sending: false
        },
        clientEmail: '',

        imagesSlider: [
            'http://vorotaroll.ru/wp-content/uploads/2021/12/4-1.png'
        ]
    });

    function saveResult() {
        setState(prevState => {
            return {
                ...prevState,
                saveResultChecked: !state.saveResultChecked
            }
        })
    }

    function saveWidth(e) {
        setState(state => {
            return {
                ...state,
                inputWidth: {
                    ...state.inputWidth,
                    value: parseInt(e, 10)
                }
            }
        })
    }

    function saveHeight(e) {
        setState(state => {
            return {
                ...state,
                inputHeight: {
                    ...state.inputHeight,
                    value: parseInt(e, 10)
                }
            }
        })
    }

    function saveZipper(e) {
        setState(state => {
            return {
                ...state,
                inputZipper: {
                    ...state.inputZipper,
                    value: parseInt(e, 10)
                }
            }
        })
    }

    function saveLengthDelivery(e) {
        setState(prevState => {
            return {
                ...prevState,
                lengthDelivery: parseInt(e.target.value, 10)
            }
        })
    }

    function saveEmail(e) {
        setState(prevState => {
            return {
                ...prevState,
                clientEmail: e.target.value
            }
        })
    }

    function calculate() {
        let price = 0;

        let tapeWidth = Math.ceil(state.inputWidth.value/100);
        let tapeHeight = Math.ceil(state.inputHeight.value/100);
        let squareTape = tapeWidth * tapeHeight;

        // Пленка 500 мкр
        if (state.checkedTape === 'weight500') {
            state.checkedMountType === 'grommet' ? price = state.result.tape500grommet : false
            price = price*squareTape
        }

        // Пленка 700 мкр
        if (state.checkedTape === 'weight700') {
            state.checkedMountType === 'grommet' ? price = state.result.tape700grommet : false
            state.checkedMountType === 'beltBracket' ? price = state.result.tape700beltBracket : false
            state.checkedMountType === 'swivelBracket' ? price = state.result.tape700swivelBracket : false
            state.checkedMountType === 'frenchLock' ? price = state.result.tape700frenchLock : false
            state.checkedMountType === 'yachtingLock' ? price = state.result.tape700yachtingLock : false
            price = price*squareTape
        }

        // Пленка 700 мкр тонированная
        if (state.checkedTape === 'weight700Toning') {
            state.checkedMountType === 'grommet' ? price = state.result.tape700tongrommet : false
            state.checkedMountType === 'beltBracket' ? price = state.result.tape700tonbeltBracket : false
            state.checkedMountType === 'swivelBracket' ? price = state.result.tape700tonswivelBracket : false
            state.checkedMountType === 'frenchLock' ? price = state.result.tape700tonfrenchLock : false
            state.checkedMountType === 'yachtingLock' ? price = state.result.tape700tonyachtingLock : false
            price = price*squareTape
        }


        // Пленка москитная
        if (state.checkedTape === 'mosquit700') {
            state.checkedMountType === 'grommet' ? price = state.result.mosquitGrommet : false
            state.checkedMountType === 'beltBracket' ? price = state.result.mosquitBeltBracket : false
            state.checkedMountType === 'swivelBracket' ? price = state.result.mosquitSwivelBracket : false
            state.checkedMountType === 'frenchLock' ? price = state.result.mosquitFrenchLock : false
            state.checkedMountType === 'yachtingLock' ? price = state.result.mosquitYachtingLock : false
            price = price*squareTape
        }


        // Молния
        if (state.checkedZipper) {
            let zipperLength = (state.inputZipper.value/100) * state.result.enterLock
            price = price + zipperLength
        }

        // Доставка

        if (state.checkedDelivery === 'deliveryStPetersburg') {
            price = price + state.result.deliveryCity
        }
        if (state.checkedDelivery === 'DeliveryForRoad') {
            if (state.lengthDelivery * state.result.deliveryCityKm <= state.result.deliveryCityMin) {
                price = price + state.result.deliveryCityMin
            } else {
                price = price + state.lengthDelivery * state.result.deliveryCityKm
            }
        }

        
        setState(state => {
            return {
                ...state,
                result: {
                    ...state.result,
                    price: formatMoney(price)
                }
            }
        })
    }

    function checkedTape(e) {
        let name = e.currentTarget.getAttribute('name');
        let allowTypes = Object.keys(state.mountingType);
        let resetMountChecked = false;

        if (name === 'weight500') {
            allowTypes = ['grommet']
            resetMountChecked = true
        } else {
            allowTypes = Object.keys(state.mountingType);
        }

        setState(prevState => {
            return {
                ...prevState,
                checkedTape: name,
                allowTypes: allowTypes,
                checkedMountType: resetMountChecked ? allowTypes[0] : state.checkedMountType
            }
        })
    }

    function checkedColor(e) {
        let name = e.currentTarget.getAttribute('name');
        setState(prevState => {
            return {
                ...prevState,
                checkedColor: name
            }
        })
    }

    function checkedMount(e) {
        let name = e.currentTarget.getAttribute('name');
        if (!e.currentTarget.classList.contains('disabled')) {
            setState(prevState => {
                return {
                    ...prevState,
                    checkedMountType: name
                }
            })
        }
    }

    function checkedZipper(e) {
        let statusZipper = state.checkedZipper;
        setState(prevState => {
            return {
                ...prevState,
                checkedZipper: !statusZipper
            }
        })
    }

    function checkedDelivery(e) {
        let name = e.currentTarget.getAttribute('name');
        setState(prevState => {
            return {
                ...prevState,
                checkedDelivery: name
            }
        })
    }


    function formatMoney(e) {
        return e.toFixed().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
    }


    useEffect(() => {
        calculate()
    }, [
                state.checkedTape,
                state.checkedMountType,
                state.checkedZipper,
                state.checkedDelivery,
                state.inputWidth.value,
                state.inputHeight.value,
                state.inputZipper,
                state.checkedDelivery,
                state.lengthDelivery,
                state.priceLoaded
            ])






async  function getData() {
    // const url = location.origin + '/wp-json/wp/v2/pages/' + document.querySelector('postid').innerHTML;
    const url = 'http://vorotaroll.ru/wp-json/wp/v2/pages/4985';

    // const urlImage = location.origin + '/wp-json/wp/v2/media/';
    const urlImage = 'http://vorotaroll.ru/wp-json/wp/v2/media/';

    const response = await fetch(url);
    const data = await response.json();
    const links = await Promise.all(Object.keys(data.acf).map(async (key) => {

        if (key.indexOf('images') > -1) {
            //console.log(urlImage + data.acf[key]);
            const urlResponse = await fetch(urlImage + data.acf[key]);
            const urlResponseJson = await urlResponse.json();
            console.log('urlResponseJson', urlResponseJson['source_url']);
            return urlResponseJson['source_url'];
        }
    }));
    
    console.log('links ', links);

    setState(prevState => {
        return ({
            ...prevState,
            priceLoaded: true,
            result: {
                ...state.result,
                deliveryCity: data.acf.deliveryCity,
                deliveryCityMin: data.acf.deliveryCityMin,
                deliveryCityKm: data.acf.deliveryCityKm,
                enterLock: data.acf.enterLock,
                mosquitBeltBracket: data.acf.mosquitBeltBracket,
                mosquitFrenchLock: data.acf.mosquitFrenchLock,
                mosquitGrommet: data.acf.mosquitGrommet,
                mosquitSwivelBracket: data.acf.mosquitSwivelBracket,
                mosquitYachtingLock: data.acf.mosquitYachtingLock,
                tape500grommet: data.acf.tape500grommet,
                tape700beltBracket: data.acf.tape700beltBracket,
                tape700frenchLock: data.acf.tape700frenchLock,
                tape700grommet: data.acf.tape700grommet,
                tape700swivelBracket: data.acf.tape700swivelBracket,
                tape700tonbeltBracket: data.acf.tape700tonbeltBracket,
                tape700tonfrenchLock: data.acf.tape700tonfrenchLock,
                tape700tongrommet: data.acf.tape700tongrommet,
                tape700tonswivelBracket: data.acf.tape700tonswivelBracket,
                tape700tonyachtingLock: data.acf.tape700tonyachtingLock,
                tape700yachtingLock: data.acf.tape700yachtingLock,
                adminEmail: data.acf.email
            },
            imagesSlider: links
        })
    })

}




function submitMail(e) {
    e.preventDefault();
    let object = {};
    object['theme'] = 'Расчет калькулятора мягких окон';
    object['Тип пленки'] = state.typeTape[state.checkedTape].title;
    object['Ширина'] = state.inputWidth.value + ' см';
    object['Высота'] = state.inputHeight.value + ' см';
    object['Цвет канта'] = state.cantColors[state.checkedColor].title;
    object['Тип крепления'] = state.mountingType[state.checkedMountType].title;
    if (state.checkedZipper) {
        object['Молния'] = 'Нужна';
        object['Длина молнии'] = state.inputZipper.value + ' см';
    } else {
        object['Молния'] = 'Не нужна';
    }
    if (state.checkedDelivery !== 'DeliveryForRoad') {
        object['Доставка'] = state.deliveryType[state.checkedDelivery].title
    } else {
        object['Доставка'] = state.deliveryType[state.checkedDelivery].title + ' ' + state.lengthDelivery + ' км'
    }
    object['Цена'] = state.result.price;
    object['emailAdmin'] = state.result.adminEmail;
    object['Email'] = state.clientEmail;

    object['Страница'] = location.href.replace(/\?.*/,'');

    const originalTextSubmitBtn = state.mail.textBtn;
    setState(prevState => {
        return {
            ...prevState,
            mail: {
              ...prevState.mail,
                textBtn: 'Отправляется..',
                sending: true
            },

        }
    })


    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://vorotaroll.ru/wp-content/themes/finoptis/mailsend.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('param=' + JSON.stringify(object));
    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            //console.log(xhr.response);


            let timer = 10;

            const timerId = setInterval(function() {
                setState(prevState => {
                    return {
                        ...prevState,
                        mail: {
                            ...prevState.mail,
                            textBtn: 'Отправлено!' + ' (' + timer + ')'
                        },
                    }
                })
                timer--
            }, 1000);


            setTimeout(function() {
                clearInterval(timerId);
                setState(prevState => {
                    return {
                        ...prevState,
                        mail: {
                            ...prevState.mail,
                            textBtn: originalTextSubmitBtn,
                            sending: false
                        },
                    }
                })
            }, 10000);

        }
    });
}

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div className="saaCalc container">
                <div className="leftBlock">
                    <p className="titleBlock">{state.typeTapeTitle}</p>
                    <div className="typeTapeBlock">
                        {
                            Object.keys(state.typeTape).map(key => {
                                if (state.typeTape[key].title) {
                                    return ( <TypeTape
                                            key={key}
                                            name={key}
                                            className={"labelInfo customCheckbox" +
                                            (key === state.checkedTape ? ' customChecked' : '')}
                                            title={state.typeTape[key].title}
                                            imgSrc={state.typeTape[key].imgSrc}
                                            checkedTape={checkedTape}/>
                                    )
                                }
                            })
                        }
                    </div>

                    <p className="titleBlock">{state.titleColorCant}</p>
                    <div className="colorBlock">
                        {
                            Object.keys(state.cantColors).map(key => {
                                if (state.cantColors[key].class) {
                                    return (<ColorsCant
                                        key={key}
                                        name={key}
                                        className={state.cantColors[key].class +
                                            (key === state.checkedColor ? ' checked' : '')
                                        }
                                        title={state.cantColors[key].title}
                                        checkedColor={checkedColor}/>)
                                }
                            })
                        }
                    </div>

                    <p className="titleBlock">{state.mountingTypeTitle}</p>
                    <div className="mountBlock">
                        {
                            Object.keys(state.mountingType).map(key => {
                                if (state.mountingType[key].title) {
                                    return (<MountType
                                        key={key}
                                        name={key}
                                        className={
                                            (key === state.checkedMountType ? 'checked' : '') +
                                            (state.allowTypes.indexOf(key) > -1 ? '' : ' disabled')
                                        }
                                        title={state.mountingType[key].title}
                                        imgSrc={state.mountingType[key].imgSrc}
                                        checkedMount={checkedMount}/>)
                                }
                            })
                        }
                    </div>

                    <div className="zipperBlock">
                        <p className="zipperTitle">{state.zipperTitle}</p>
                        <div
                            className="zipperCheckBox"
                            onClick={checkedZipper}>
                            <p
                                className={"customCheckbox" +
                                (state.checkedZipper ? ' customChecked' : '')}>
                                Да
                            </p>
                            <img
                                src={images.zipper}
                                alt=""/>
                        </div>
                    </div>

                </div>
                <div className="blockSliders">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            "clickable": true
                        }}
                        navigation={true}
                        className="mySwiper">

                        {
                            state.imagesSlider.map(img => {
                                if (img) {
                                    return (
                                        <SwiperSlide
                                            key={img}>
                                            <img
                                                src={img}
                                                alt={state.mainImage.title}/>
                                        </SwiperSlide>
                                    )
                                }
                            })
                        }


                    </Swiper>


                    <RangeSlider
                        classBlock={state.inputWidth.class}
                        title={state.inputWidth.title}
                        titleInput={state.inputWidth.titleInput}
                        min={state.inputWidth.min}
                        max={state.inputWidth.max}
                        step={state.inputWidth.step}
                        measure={state.inputWidth.measure}
                        value={state.inputWidth.value}
                        valueHandler={saveWidth}/>


                    <RangeSlider
                        classBlock={state.inputHeight.class}
                        title={state.inputHeight.title}
                        titleInput={state.inputHeight.titleInput}
                        min={state.inputHeight.min}
                        max={state.inputHeight.max}
                        step={state.inputHeight.step}
                        measure={state.inputHeight.measure}
                        value={state.inputHeight.value}
                        valueHandler={saveHeight}/>

                    {state.checkedZipper &&
                        <RangeSlider
                            classBlock={state.inputZipper.class}
                            title={state.inputZipper.title}
                            titleInput={state.inputZipper.titleInput}
                            min={state.inputZipper.min}
                            max={state.inputZipper.max}
                            step={state.inputZipper.step}
                            measure={state.inputZipper.measure}
                            value={state.inputZipper.value}
                            valueHandler={saveZipper}/>
                    }

                </div>
            </div>
            <div className="resultBlock">
                    <div className='deliveryBlock'>
                        <p className="titleBlock">{state.deliveryTitle}</p>
                        <div className='deliveryList'>
                            {
                                Object.keys(state.deliveryType).map(key => {
                                    if (state.deliveryType[key].title) {
                                        return (<div
                                                key={key}
                                                name={key}
                                                className={'customCheckbox' + (key === state.checkedDelivery ? ' customChecked' : '')}
                                                onClick={checkedDelivery}>
                                                <p>{state.deliveryType[key].title}</p>
                                            </div>
                                        )
                                    }
                                })
                            }

                            { state.checkedDelivery === 'DeliveryForRoad' &&
                            <div
                                className="inputDistanceGroup">
                                <input
                                    type="number"
                                    min='1'
                                    defaultValue='1'
                                    onInput={saveLengthDelivery}/>
                                <p>км</p>
                            </div>
                            }
                        </div>
                    </div>

                    <div className="priceBlock">
                        { state.priceLoaded && (
                            <div className="priceResult">
                                <p>Итого: <span>{state.result.price} Р</span></p>
                                <button
                                    onClick={saveResult}>
                                    СОХРАНИТЬ РАСЧЕТ
                                </button>
                            </div>
                        )}

                        {state.saveResultChecked && (
                            <>
                                <p className="notiDescription">Мы можем отправить данный расчет на Ваш электронный адрес.</p>
                                <p className="notiDescription">Для этого введите Ваш е-мейл в поле ниже.</p>
                                <form
                                    onSubmit={submitMail}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="mail@mail.ru"
                                        onInput={saveEmail}
                                        required/>
                                    <button
                                        type='submit'
                                        disabled={state.mail.sending ? 'disabled' : false}>
                                        {state.mail.textBtn}
                                    </button>
                                </form>
                            </>
                        )}

                    </div>
            </div>

        </div>
    )
}




