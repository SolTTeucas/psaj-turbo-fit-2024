import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { ScrollView, Image, StyleSheet, View, SafeAreaView,Text,Pressable,TouchableOpacity,KeyboardAvoidingView, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Title } from 'react-native-paper';
import  { firebase } from '../FIrebase/firebase';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';

export function Details({navigation}) {

    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const uploadMedia = async () => {
        setUploading(true);

        try {
            const { uri } = await FileSystem.getInfoAsync(image);
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = () => {
                    resolve(xhr.response);
                };
                xhr.onerror = (e) => {
                    reject(new TypeError('Network request failed'))
                };
                xhr.responseType = 'blob';
                xhr.open('GET', uri, true);
                xhr.send(null);
            });

            const filename = image.substring(image.lastIndexOf('/') + 1);
            const ref = firebase.storage().ref().child(filename);

            await ref.put(blob);
            setUploading(false);
            Alert.alert('Photo Uploaded!!!');
            setImage(null);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };
    

    const [title, setTitle] = useState('');

    const handleTitleChange = (text) => {
        setTitle(text);
    };

    return(
        <SafeAreaView style={styles.Container}>
            <View style={styles.HeaderSquare}></View>
                
            <View style={styles.HeaderContainer}>
                <Image style={styles.BackButton} source={require('./back-button.png')}/>
                <Text style={styles.Header1}>Add details</Text>

                <TouchableOpacity style={styles.UploadButton} onPress={uploadMedia}>
                    <Text style={styles.UploadText}>Upload</Text>
                </TouchableOpacity>
            </View> 
            <TouchableOpacity onPress={pickImage}>
                <View style={styles.VideoPlayer}>
                    <Text>Masukan Video</Text>  
                </View>
            </TouchableOpacity>
            <View>
                {image && <Image
                    source={{ uri: image }}
                    style={{ width: 300, height: 300}}
                />}
            </View>
            

            <KeyboardAvoidingView style={styles.KeyboardAvoidingView} behavior="padding" enabled>
                <View style={styles.TitleInput}>
                    <TextInput style={styles.TextInput} placeholder='Create a Title' value={title} onChangeText={handleTitleChange} 
                                placeholderTextColor='#6C9BD4'
                    />
                    <TextInput style={styles.TextInput2} placeholder='Add a Description' value={title} onChangeText={handleTitleChange} 
                                placeholderTextColor='#6C9BD4'
                    />
                </View>
            </KeyboardAvoidingView>

            <View style={styles.NavbarSquare}>
                <View style={styles.NavbarContainer}>
                <View style={styles.NavbarItems}>
                    <Image style={styles.HomeButton} resizeMode= "contain" source={require('./home-icon-navbar.png')}/>
                    <Text style={styles.ButtonDetails}>Home</Text>
                </View>
                <View style={styles.NavbarItems2}>
                    <Image style={styles.ReportButton} resizeMode= "contain" source={require('./report-icon-navbar.png')}/>
                    <Text style={styles.ButtonDetailsGrey}>Report</Text>
                </View>
                <View style={styles.NavbarItems2}>
                    <Image style={styles.ExploreButton} resizeMode="contain" source={require('./explore-icon-blue-navbar.png')}/>
                    <Text style={styles.ButtonDetailsGrey}>Explore</Text>
                </View>
                <View style={styles.NavbarItems2}>
                    <Image style={styles.ProfileButton} resizeMode="contain" source={require('./profile-icon-navbar.png')}/>
                    <Text style={styles.ButtonDetailsGrey}>Profile</Text>
                </View>

                </View>
            </View>

        <View style={styles.CirclesContainer}>
            <Image style={styles.Cirlces} source={require('./circles.png')}/>
        </View>

        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        justifyContent: 'flex-start',
        backgroundColor: '#fdfdfd',
        borderColor: 'black',
    },
    HeaderSquare:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        backgroundColor: '#387ADF',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.10)',
    },
    HeaderContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal:20,
        paddingTop: 30,
    },
    Header1:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fdfdfd',
        flex: 1,
    },
    UploadButton:{
        flexDirection:'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContentq: 'center',
        backgroundColor: '#FDFDFD',
        padding: 10,
        borderRadius:7,
        borderTopRightRadius: 20
    },
    UploadText:{
        color: '#387ADF',
        fontWeight:'600',
    },
    UploadIcon:{
        marginLeft:3,
    },

    VideoPlayer:{
        top: '4%',
        left: 0,
        right: 0,
        height: 225,
        backgroundColor: '#B6B6B6',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.10)',
    },

    TitleInput:{
        paddingHorizontal:20,
        marginTop:30,
    },
    TextInput:{
        borderBottomWidth:1,
        borderColor:'#387ADF',
        padding:10,
        fontSize:32,

    }, 
    TextInput2:{
        borderBottomWidth:1,
        borderColor:'#387ADF',
        padding:10,
        fontSize:24,

    }, 

    //navbar
    NavbarSquare:{
        position: 'absolute', 
        bottom: 0, 
        left: 0,
        right: 0,
        zIndex:-1,
      },
    NavbarContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      NavbarItems:{
        flexDirection: 'column',
        alignItems: 'center',
        margin: 15,
      },
        NavbarItems2:{
        flexDirection: 'column',
        alignItems: 'center',
        margin: 15,
      },
      HomeButton:{
        width: 28,
      },
      ReportButton:{
        width: 28,
      },
      ExploreButton:{
        width:28,
        marginTop:6,
      },
      ButtonDetails:{
        fontFamily: 'Poppins, semibold',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'left',
        color: '#387ADF',
      },
      ButtonDetailsGrey:{
        fontFamily: 'Poppins, semibold',
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'left',
        color: '#616161',
      },

      CirclesContainer:{
        position:'absolute',
        zIndex:-2,
        left:0,
        bottom:0,
      },
});