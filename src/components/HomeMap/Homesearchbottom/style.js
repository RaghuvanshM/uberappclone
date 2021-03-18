import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  textinput: {
    backgroundColor: '#b0b0b0',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6e6e6e',
  },
  timeContainer: {
    flexDirection: 'row',
    width: 130,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
  },
  bottomrow: {
    flexDirection: 'row',
    padding:8,
    borderBottomWidth:2,
    borderColor:'#e3e8e4',
    width:'90%',
    alignSelf:'center'
  },
  rowcirlcecontainer: {
    backgroundColor: '#c7c9c8',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  destinationtext: {
    alignSelf: 'center',
    fontSize: 18,
    marginLeft: 20,
    fontWeight: '500',
  },
});
export default styles;
