import { Dimensions, Image, View, Text, SafeAreaView } from "react-native";
import { ArrowIcon, ContainerCarousel, ContainerNavigation, ContainerPagination, ContainerText, Head, ImageCarousel, LinkLabel, TextCarousel, TextHighlight, styles } from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel"
import { useRef, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../styles/theme";
import { useNavigation } from "@react-navigation/native";
import { widthPercentageToDP } from "react-native-responsive-screen";

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const image1 = require("../../../assets/images/carousel/carousel-1.png")
const image2 = require("../../../assets/images/carousel/carousel-2.png")
const image3 = require("../../../assets/images/carousel/carousel-3.png")

const carouselItems = [
    {
        id: 0,
        image: image1,
        text: <TextCarousel>Encontre a <TextHighlight>conexão profissional</TextHighlight> que você procura!</TextCarousel>
    },
    {
        id: 1,
        image: image2,
        text: <TextCarousel>As melhores conexões, sempre <TextHighlight>próximo</TextHighlight> de você!</TextCarousel>
    },
    {
        id: 2,
        image: image3,
        text: <TextCarousel><TextHighlight>Facilidade</TextHighlight> e <TextHighlight>praticidade</TextHighlight> na conexão!</TextCarousel>
    },
]

function renderItem({ item }) {
    return (
        <View style={[styles.carouselItem]}>
            <ImageCarousel source={item.image} />
            <Text style={styles.textCarousel}>{item.text}</Text>
        </View>
    );
}

export default function OnBoarding() {
    const [activeSlide, setActiveSlide] = useState(0)
    const navigation = useNavigation();

    let isCarousel = useRef();

    const goToNext = () => {
        isCarousel.snapToNext();
        if (activeSlide == 2) {
            jump()
        }
    }

    const goToPrev = () => {
        isCarousel.snapToPrev()
    }

    function jump() {
        navigation.navigate('ChooseProfileType')
    }

    function onDragEvent() {
        setTimeout(() => {
            if (activeSlide == 2) {
                jump();
            }
        }, 2000)        
    }

    return (
        <SafeAreaView style={styles.container}>
            <Head>
                {activeSlide < 2 &&
                    <TouchableOpacity onPress={() => jump()}>
                        <LinkLabel>Pular</LinkLabel>
                    </TouchableOpacity>
                }
            </Head>
            <ContainerCarousel>
                <Carousel
                    layout={"default"}
                    ref={(c) => { isCarousel = c; }}
                    data={carouselItems}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    renderItem={renderItem}
                    onSnapToItem={index => setActiveSlide(index)}
                    onScrollEndDrag={() => onDragEvent()}
                    // containerCustomStyle={{ flex: 1 }}
                    // slideStyle={{ flex: 1 }}
                />
                <ContainerPagination>
                    <View style={{ width: widthPercentageToDP(36), alignItems: "flex-end" }}>
                        {
                            activeSlide > 0 &&
                            <TouchableOpacity onPress={goToPrev} disabled={activeSlide == 0}>
                                <ArrowIcon
                                    name="arrow-left-circle"
                                    size={32}
                                    color={activeSlide > 0 ? theme.colors.secondary : theme.colors.disabled}
                                />
                            </TouchableOpacity>
                        }
                    </View>

                    <View style={{ width: widthPercentageToDP(30) }}>
                        <Pagination
                            dotsLength={carouselItems.length}
                            activeDotIndex={activeSlide}
                            carouselRef={isCarousel}
                            dotStyle={{
                                width: 12,
                                height: 12,
                                borderRadius: 6,
                                backgroundColor: theme.colors.secondary,
                            }}
                            inactiveDotStyle={{
                                backgroundColor: theme.colors.textDisable,
                                width: 12,
                                height: 12,
                            }}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.9}
                        />
                    </View>

                    <View style={{ width: widthPercentageToDP(30) }}>
                        <TouchableOpacity onPress={goToNext}>
                            <ArrowIcon
                                name="arrow-right-circle"
                                size={32}
                                color={theme.colors.secondary}
                            />
                        </TouchableOpacity>
                    </View>
                </ContainerPagination>
            </ContainerCarousel>
        </SafeAreaView>
    );
}