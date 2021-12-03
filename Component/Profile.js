import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import Cross from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <TouchableOpacity>
            <Cross name="close" size={22} color="#000" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.textHeading}>Nitin Kumar</Text>
          <Text style={styles.textSecondary}>SKY12234</Text>
          <TouchableOpacity>
            <Text style={styles.profileBtn}>Manage Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.topRight}>
          <View style={styles.shadowWrapper}>
            <View style={styles.iconBox}>
              <Image
                source={require('../android/app/src/Assets/Img/icon.png')}
                style={styles.image}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.bottom}>
        <TouchableOpacity>
          <View style={styles.option}>
            <View style={styles.iconParent}>
              <Image
                source={require('../android/app/src/Assets/Img/language.png')}
                style={styles.imageMenu}
              />
            </View>
            <Text style={styles.optionText}>Language</Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#A6A6A6',
                  fontSize: 12,
                  marginLeft: '71%',
                  lineHeight: 16
                }}>
                Change
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.option}>
            <View style={styles.iconParent}>
              <Image
                source={require('../android/app/src/Assets/Img/edit_profile.png')}
                style={{height: 26, width: 24}}
              />
            </View>
            <Text style={styles.optionText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={[
              styles.option,
              {backgroundColor: 'rgba(204,212,242,0.5)', opacity: 0.7},
            ]}>
            <View style={styles.iconParent}>
              <Ionicons
                name="md-settings-outline"
                size={25}
                color="rgb(125,125,125)"
                style={styles.icon}
              />
            </View>
            <Text style={styles.optionText}>Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.option}>
            <View style={styles.iconParent}>
              <Image
                source={require('../android/app/src/Assets/Img/share_app.png')}
                style={{height: 18, width: 20}}
              />
            </View>
            <Text style={styles.optionText}>Share app</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.option}>
            <View style={styles.iconParent}>
              <Image
                source={require('../android/app/src/Assets/Img/help_support.png')}
                style={{height: 28, width: 28}}
              />
            </View>
            <Text style={styles.optionText}>Help & Support</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.option}>
            <View style={styles.iconParent}>
              <Image
                source={require('../android/app/src/Assets/Img/faq.png')}
                style={{height: 27, width: 26}}
              />
            </View>
            <Text style={styles.optionText}>FAQ</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.option}>
            <View style={styles.iconParent}>
              <Image
                source={require('../android/app/src/Assets/Img/feedback.png')}
                style={{height: 24, width: 24}}
              />
            </View>
            <Text style={styles.optionText}>Feedback</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.option}>
            <View style={styles.iconParent}>
              <Image
                source={require('../android/app/src/Assets/Img/bulb_icon.png')}
                style={styles.imageMenu}
              />
            </View>
            <Text style={styles.optionText}>What's New</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.option}>
            <View style={styles.iconParent}>
              <Image
                source={require('../android/app/src/Assets/Img/about_us.png')}
                style={styles.imageMenu}
              />
            </View>
            <Text style={styles.optionText}>About Us</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: '40%'}}>
          <View style={styles.option}>
            <View style={styles.iconParent}>
              <Image
                source={require('../android/app/src/Assets/Img/log_out.png')}
                style={{height: 17, width: 17}}
              />
            </View>
            <Text style={styles.optionText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  top: {
    height: '11%',
    width: '100%',
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeft: {
    width: '30%',
    height: '100%',
    justifyContent: 'space-around',
  },
  icon: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: -4
  },
  textHeading: {
    color: '#000000',
    fontWeight: '400',
    fontSize: 22,
  },
  textSecondary: {
    color: '#000000',
    fontSize: 16,
  },
  profileBtn: {
    color: '#000000',
    fontSize: 14,
  },
  topRight: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowWrapper: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    height: 80,
    width: 80,
    shadowColor: 'rgb(0,0,0)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,
  },
  iconBox: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 56,
    width: 53,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginVertical: 8,
  },
  bottom: {
    height: '89%',
    width: '100%',
    //   backgroundColor: 'grey'
  },
  option: {
    height: 47,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginVertical: 2.2,
  },
  optionText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '400',
    paddingLeft: '5%',
  },
  iconParent: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageMenu: {
    height: 26,
    width: 26,
  },
});
