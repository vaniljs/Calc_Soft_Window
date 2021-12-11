import React, {useState, useEffect } from 'react';
import 'rc-slider/assets/index.css';
import RangeSlider from "../components/ranges";
import Resultcard from "../components/resultcard/Resultcard";
import ColorsCant from "../components/colorsCant";
import TypeTape from "../components/TypeTape";
import MountType from "../components/mountType";
import UrlImages from "../images";
import images from "../images/images";



export function App() {

    const [state, setState] = useState({

        titleColorCant: 'Выберите цвет канта',
        checkedColor: 'brown',
        cantColors: {
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
                title: 'Красный'
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
        mountingType: {
            grommet: {
                title: 'Люверс',
                imgSrc: UrlImages.grommet,
            },
            beltBracket:{
                title: 'Ремень-скоба',
                imgSrc: UrlImages.beltBracket,
            },
            frenchLock: {
                title: 'Франц. замок',
                imgSrc: UrlImages.frenchLock,
            },
            swivelBracket:{
                title: 'Поворотная скоба',
                imgSrc: UrlImages.swivelBracket,
            },
            yachtingLock: {
                title: 'Яхтенный замок',
                imgSrc: UrlImages.yachtingLock,
            }
        },


        zipperTitle: 'С молнией',
        checkedZipper: false,
        mainImage: {
            title: 'Мягкие окна',
            src: images.home
        },


        deliveryTitle: 'Варианты доставки',
        checkedDelivery: 'pickup',
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
            value: 20,
            measure: 'см'
        },


        inputHeight: {
            class: 'inputHeight',
            title: 'Высота (20-1000 см)',
            titleInput: 'Высота',
            min: 20,
            max: 1000,
            step: 10,
            value: 20,
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

        averageMonthlyReturn: {
            class: 'average_monthly_return',
            title: 'Среднемесячная доходность',
            min: 20,
            max: 1000,
            step: 10,
            value: 20,
            measure: 'см'
        },
        result: {
            voice: {
                month3: 0,
                month6: 0,
                month12: 0,
                month24: 0
            },
            profit: {
                month3: 0,
                month6: 0,
                month12: 0,
                month24: 0
            }

        }
    });

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
        console.log(parseInt(e, 10)) ;
    }


    function saveHeight(e) {
        setState(state => {
            return {
                ...state,
                inputHeight: {
                    ...state.inputHeight,
                    value: e
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
                    value: e
                }
            }
        })
    }



    function calculate() {
        console.log('calculate()');
        let A2 = parseInt(state.inputWidth.value, 10);
        let B2 = parseInt(state.inputHeight.value, 10);
        let C2 = parseInt(state.averageMonthlyReturn.value, 10)/100;

        let voice3month = ((A2+A2*C2)+((A2+A2*C2+B2)*C2)+((A2+A2*C2)+((A2+A2*C2+B2)*C2)+B2)*C2);
        let profit3month = (voice3month-A2-B2*2);
        let voice4month = voice3month+(voice3month+B2)*C2;
        let voice5month = voice4month+(voice4month+B2)*C2;
        let voice6month = voice5month+(voice5month+B2)*C2;
        let profit6month = voice6month-A2-B2*5;
        let voice7month = voice6month+(voice6month+B2)*C2;
        let voice8month = voice7month+(voice7month+B2)*C2;
        let voice9month = voice8month+(voice8month+B2)*C2;
        let voice10month = voice9month+(voice9month+B2)*C2;
        let voice11month = voice10month+(voice10month+B2)*C2;
        let voice12month = voice11month+(voice11month+B2)*C2;
        let profit12month = voice12month-A2-B2*11;
        let voice13month = voice12month+(voice12month+B2)*C2;
        let voice14month = voice13month+(voice13month+B2)*C2;
        let voice15month = voice14month+(voice14month+B2)*C2;
        let voice16month = voice15month+(voice15month+B2)*C2;
        let voice17month = voice16month+(voice16month+B2)*C2;
        let voice18month = voice17month+(voice17month+B2)*C2;
        let voice19month = voice18month+(voice18month+B2)*C2;
        let voice20month = voice19month+(voice19month+B2)*C2;
        let voice21month = voice20month+(voice20month+B2)*C2;
        let voice22month = voice21month+(voice21month+B2)*C2;
        let voice23month = voice22month+(voice22month+B2)*C2;
        let voice24month = voice23month+(voice23month+B2)*C2;
        let profit24month = voice24month-A2-B2*23;

        setState(state => {
            return {
                ...state,
                result: {
                    ...state.result,
                    voice: {
                        ...state.result.voice,
                        month3: formatMoney(voice3month),
                        month6: formatMoney(voice6month),
                        month12: formatMoney(voice12month),
                        month24: formatMoney(voice24month)
                    },
                    profit:  {
                        ...state.result.profit,
                        month3: formatMoney(profit3month),
                        month6: formatMoney(profit6month),
                        month12: formatMoney(profit12month),
                        month24: formatMoney(profit24month)
                    },
                }
            }
        })
    }


    function checkedTape(e) {
        let name = e.currentTarget.getAttribute('name');
        setState(prevState => {
            return {
                ...prevState,
                checkedTape: name
            }
        })
        console.log(name);
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
        setState(prevState => {
            return {
                ...prevState,
                checkedMountType: name
            }
        })
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
        console.log(name);
    }

    useEffect(() => {
        console.log(state.cantColors.checkedColorClass);
    }, [state.cantColors.checkedColorClass])

    function formatMoney(e) {
        return e.toFixed().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
    }


    useEffect(() => {
        calculate()
    }, [
                state.inputWidth.value,
                state.inputHeight.value,
                state.averageMonthlyReturn.value
            ])


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
                                        className={(key === state.checkedMountType ? 'checked' : '')}
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
                    <img
                        src={state.mainImage.src}
                        alt={state.mainImage.title}/>

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
                <div className="d-flex">
                    <div className='deliveryBlock'>
                        <p className="titleBlock">{state.deliveryTitle}</p>
                        <div className='d-flex deliveryList'>
                            {
                                Object.keys(state.deliveryType).map(key => {
                                    if (state.deliveryType[key].title) {
                                        return (<div
                                                key={key}
                                                name={key}
                                                className={'customCheckbox' + (key === state.checkedDelivery ? ' customChecked' : '')}
                                                onClick={checkedDelivery}>
                                                {state.deliveryType[key].title}
                                            </div>
                                        )
                                    }
                                })
                            }

                            { state.checkedDelivery === 'DeliveryForRoad' &&
                            <div
                                className="inputDistanceGroup">
                                <input type="number"/>
                                <p>км</p>
                            </div>
                            }
                        </div>
                    </div>

                    <div className="priceBlock">
                        <div className="priceResult">
                            <p>Итого: <span>20 000 Р</span></p>
                            <button>СОХРАНИТЬ РАСЧЕТ</button>
                        </div>
                        <p className="notiDescription">Мы можем отправить данный расчет на ваш электронный адрес.</p>
                        <p className="notiDescription">Для этого введите ваш е-мейл в поле ниже.</p>
                        <form
                            action="">
                            <input
                                type="email"
                                name="email"
                                placeholder="mail@mail.ru"/>
                            <button>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}