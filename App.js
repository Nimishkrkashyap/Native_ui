import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Materialicons from 'react-native-vector-icons/MaterialIcons';
const App = () => {
  return (
    <View>
      <View style={styles.head}>
        <View style={styles.navigation}>
          <Text style={styles.navigation_font}>
            <Ionicons name="menu-outline" size={20} />
          </Text>

          <Text style={styles.navigation_font}>Attendance</Text>

          <Text style={styles.navigation_font}>
            <Materialicons name="notifications-on" size={20} />
          </Text>
        </View>
        <View style={styles.heading}>
          <View style={styles.heading_left}>
            <Text style={styles.heading_left_primary}>
              Hello Admin, Good morning
            </Text>
            <Text style={styles.heading_left_secondary}>
              You have 4 task due today
            </Text>
          </View>
          <View style={styles.heading_right}></View>
        </View>
      </View>

      <View style={styles.middle}>
        <View style={styles.middle_top}></View>

        <View style={styles.middle_bottom}>
          <View style={styles.vertical_line} />
          <View style={styles.horizontal_line} />
          <View style={styles.middle_bottom_nav_lineUp} />
          <View style={styles.middle_bottom_nav}>
            <Text style={styles.middle_bottom_nav_text}>Clock In</Text>
            <Text style={styles.middle_bottom_nav_text}>Clock Out</Text>
          </View>
          <View style={styles.middle_bottom_nav_lineDown} />

          <View style={styles.card_parent}>
            <View style={styles.middle_bottom_card}>
              <View style={styles.middle_bottom_card_left}>
                <View style={styles.middle_bottom_card_left_box}>
                  <Image
                    source={require('./android/app/src/Assets/Img/icon.png')}
                    style={{height: 49, width: 42, marginTop: -4}}
                  />
                </View>
              </View>
              <View style={styles.middle_bottom_card_right}>
                <Text style={styles.middle_bottom_card_right_text_primary}>
                  09:00 Am
                </Text>
                <Text style={styles.middle_bottom_card_right_text_secondary}>
                  Bu Bhandari
                </Text>
                <Text style={styles.middle_bottom_card_right_text_secondary}>
                  Baner
                </Text>
              </View>
            </View>

            <View style={styles.middle_bottom_card}>
              <View style={styles.middle_bottom_card_left}>
                <View style={styles.middle_bottom_card_left_box}>
                  <Image
                    source={require('./android/app/src/Assets/Img/icon.png')}
                    style={{height: 49, width: 42, marginTop: -4}}
                  />
                </View>
              </View>
              <View style={styles.middle_bottom_card_right}>
                <Text style={styles.middle_bottom_card_right_text_primary}>
                  09:00 Am
                </Text>
                <Text style={styles.middle_bottom_card_right_text_secondary}>
                  Bu Bhandari
                </Text>
                <Text style={styles.middle_bottom_card_right_text_secondary}>
                  Baner
                </Text>
              </View>
            </View>

            <View style={styles.middle_bottom_card}>
              <View style={styles.middle_bottom_card_left}>
                <View style={styles.middle_bottom_card_left_box}>
                  <Image
                    source={require('./android/app/src/Assets/Img/icon.png')}
                    style={{height: 49, width: 42, marginTop: -4}}
                  />
                </View>
              </View>
              <View style={styles.middle_bottom_card_right}>
                <Text style={styles.middle_bottom_card_right_text_primary}>
                  09:00 Am
                </Text>
                <Text style={styles.middle_bottom_card_right_text_secondary}>
                  Bu Bhandari
                </Text>
                <Text style={styles.middle_bottom_card_right_text_secondary}>
                  Baner
                </Text>
              </View>
            </View>

            <View style={styles.middle_bottom_card}>
              <View style={styles.middle_bottom_card_left}>
                <View style={styles.middle_bottom_card_left_box}>
                  <Image
                    source={require('./android/app/src/Assets/Img/icon.png')}
                    style={{height: 49, width: 42, marginTop: -4}}
                  />
                </View>
              </View>
              <View style={styles.middle_bottom_card_right}>
                <Text style={styles.middle_bottom_card_right_text_primary}>
                  09:00 Am
                </Text>
                <Text style={styles.middle_bottom_card_right_text_secondary}>
                  Bu Bhandari
                </Text>
                <Text style={styles.middle_bottom_card_right_text_secondary}>
                  Baner
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#1c4ebf',
    width: '100%',
    height: 150,
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigation_font: {
    color: 'white',
  },
  heading_left_primary: {
    color: 'white',
  },
  heading_left_secondary: {
    color: 'white',
  },
  middle: {
    position: 'absolute',
    top: 110,
    backgroundColor: '#fafafa',
    width: '100%',
    height: 450,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: 'rgb(0,0,0.0.25)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  middle_top: {
    width: '100%',
    height: 165,
    // backgroundColor: '#fafafa'
  },
  middle_bottom: {
    width: '100%',
    height: 285,
    // backgroundColor: '#c4c4c4',
  },
  middle_bottom_nav_lineUp: {
    width: '100%',
    height: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  middle_bottom_nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70,
    paddingVertical: 6,
  },
  middle_bottom_nav_text: {
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
  },
  middle_bottom_nav_lineDown: {
    width: '100%',
    height: 1.5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  vertical_line: {
    position: 'absolute',
    left: '50%',
    height: '100%',
    width: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  horizontal_line: {
    position: 'absolute',
    top: '50%',
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  card_parent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle_bottom_card: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 30,
  },
  middle_bottom_card_left_box: {
    height: 60,
    width: 60,
    borderRadius: 10,
    borderWidth: 1.8,
    borderColor: '#C4C4C4',
    backgroundColor: 'white',
    shadowColor: 'rgb(0,0,0,0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle_bottom_card_right_text_primary: {
    color: 'rgba(0,0,0,0.8)',
    fontWeight: '500',
    fontSize: 17,
  },
  middle_bottom_card_right_text_secondary: {
    color: 'rgba(0,0,0,0.4)',
    fontWeight: '500',
    fontSize: 15,
  },
});
