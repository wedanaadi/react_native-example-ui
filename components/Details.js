import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import colors from '../assets/colors/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const Details = ({route, navigation}) => {
  const {item} = route.params;

  const renderIngredientItem = ({item}) => {
    return (
      <View style={[styles.ingredientItemWrapper,{
        marginLeft: item.id == 1 ? 20 : 0,
      }]}>
        <Image source={item.image} style={styles.ingredientItemImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather
                  name="chevron-left"
                  size={12}
                  color={colors.textDark}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.headerRight}>
              <MaterialCommunityIcons
                name="star"
                size={12}
                color={colors.white}
              />
            </View>
          </View>
        </SafeAreaView>

        {/* Title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>${item.price}</Text>
        </View>

        {/* Info */}
        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Size</Text>
              <Text style={styles.infoItemText}>
                {item.sizeName} {item.sizeNumber}"
              </Text>
            </View>

            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Crust</Text>
              <Text style={styles.infoItemText}>{item.crust}</Text>
            </View>

            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Delivery in</Text>
              <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
            </View>
          </View>

          <View>
            <Image source={item.image} style={styles.ItemImage} />
          </View>
        </View>

        {/* Ingredient */}
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <View style={styles.ingredientsListWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={item.ingredients}
              renderItem={renderIngredientItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </View>

        {/* Button */}
        <TouchableOpacity onPress={() => alert('Your order has been placed!')}>
          <View style={styles.orderWrapper}>
            <Text style={styles.orderText}>Place an Order</Text>
            <Feather name='chevron-right' size={14} color={colors.textDark} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backround,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  titleWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    color: colors.textDark,
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    width: '75%',
  },
  priceWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  price: {
    color: colors.price,
    fontFamily: 'Montserrat-Semibold',
    fontSize: 32,
  },
  infoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    color: colors.textLight,
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  },
  infoItemText: {
    color: colors.textDark,
    fontFamily: 'Montserrat-Semibold',
    fontSize: 16,
    marginTop: 5,
  },
  ItemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 50,
  },
  ingredientsTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginRight: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    // marginBottom: 5,
  },
  ingredientItemImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    flexDirection: 'row',
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderText: {
    color: colors.textDark,
    marginRight: 5, 
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
});
