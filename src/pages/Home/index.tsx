import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import Carousel from "../../components/Carousel";
import Highlights from "../../components/Highlights";
import ViewContainer from "../../components/ViewContainer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import React from "react";

const carousel = [1, 2, 3];

const Home = () => {  
  // useEffect(() => {
  //   api.get("movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1").then((item) => {
  //     console.log(item)
  //   })
  // }, [])

  return (
    <ViewContainer style={styles.container}>
      <ScrollView>
        <Highlights />
        <View>
          <Text style={styles.title}>Movies</Text>
        </View>
        <View>
          {
            carousel.map((item) => {
              return (
                <View key={item}>
                  <Carousel />
                </View>
              )
            })
          }
        </View>
      </ScrollView>
    </ViewContainer>
  )
}

export default Home;