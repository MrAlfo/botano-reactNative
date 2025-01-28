import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Image } from "expo-image";
import { ExerciseCard } from "@/components/ExerciseCard";
import { ProductCard } from "@/components/ProductCard";
import { RelatedProduct } from "@/components/RelatedProduct";
import { PriceDisplay } from "@/components/PriceDisplay";
import BottomSheetModal from "@/components/BottomSheetModal";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { Stack, useRouter } from "expo-router";
import { AntDesign, EvilIcons, Feather, Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { styles, sheetStyles } from './styles/help'

interface BottomSheetProps {
  isOpen: Animated.SharedValue<boolean>;
  toggleSheet: () => void;
  duration?: number;
  children: React.ReactNode;
}

// BottomSheet Bileşeni
function BottomSheet({
  isOpen,
  toggleSheet,
  duration = 500,
  children,
}: BottomSheetProps) {
  const height = useSharedValue(0);
  const progress = useDerivedValue(() =>
    withTiming(isOpen.value ? 0 : 1, { duration })
  );

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: progress.value * 2 * height.value }],
  }));

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - progress.value,
    zIndex: isOpen.value
      ? 1
      : withDelay(duration, withTiming(-1, { duration: 0 })),
  }));

  return (
    <>
      <Animated.View style={[sheetStyles.backdrop, backdropStyle]}>
        <TouchableOpacity style={styles.flex} onPress={toggleSheet} />
      </Animated.View>
      <Animated.View
        onLayout={(e) => {
          height.value = e.nativeEvent.layout.height;
        }}
        style={[sheetStyles.sheet, sheetStyle]}
      >
        {children}
      </Animated.View>
    </>
  );
}

const KartModal = () => {
  const [isSheetVisible, setIsSheetVisible] = React.useState(true);
  const isOpen = useSharedValue(false);
  const router = useRouter();

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const openSheet = () => setIsSheetVisible(true);
  const closeSheet = () => setIsSheetVisible(false);
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView style={styles.screenContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.backText}>X</Text>
        </TouchableOpacity>

        <View style={styles.mainContent}>
          <Image
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e01f919a-13da-4e19-9516-3487e084c232?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0",
            }}
            style={styles.mainImage}
          />

          <View style={styles.contentContainer}>
            <ExerciseCard
              title="Running Exercise"
              description="Slow down and feel your breath. Count each step as your feet touch the ground, tuning into your body's rhythm. Let yourself flow with each stride."
              iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4e268c587e459aed95e4e94850c283a01e776427754cabb8b98f4d884ef3e69a?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0"
            />

            <Image
              source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/e58faa22cce2424a22821644f3a7ae4710ea7bff70c4962ca480599f473b1580?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0",
              }}
              style={styles.dividerImage}
            />

            <ProductCard
              title="Best Practice"
              description="Select or customize your avatar and enter your social media account information to personalize your profile."
              imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/20cd5df84b22865bd8322602117a14f2994f85cd6149642e3100852e527c2896?placeholderIfAbsent=true&apiKey=7efa2bc6ca0748d89d049010d54aaee0"
            />

            <RelatedProduct
              title="Releated Product"
              description="Select or customize your avatar and enter your social media account information to personalize your profile."
            />
            <PriceDisplay
              title="Advanced Juice Reboot by JRINK by Purée Regular price"
              price="$150"
              subtitle="Sustainably Wild Harvested Chaga Mushroom"
              images={[
                require('../../assets/images/releated1.png'),
                require('../../assets/images/releated2.png'),
              ]}
            />
            <TouchableOpacity style={styles.actionButton} onPress={toggleSheet}>
              <Text style={styles.actionButtonText}>Ok, I'm in!</Text>
            </TouchableOpacity>

            {isSheetVisible && <BottomSheetModal closeSheet={closeSheet} />}
          </View>
        </View>
      </ScrollView>
      <BottomSheet isOpen={isOpen} toggleSheet={toggleSheet}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.sheetContent}>
          <TouchableOpacity
            style={styles.backButtonModal}
            onPress={toggleSheet}
          >
            <View style={styles.backBtn}>
            <MaterialIcons name="arrow-back-ios-new" size={18} color="black" />
            </View>
          </TouchableOpacity>
          <Text style={styles.cardCompletedText}>CARD COMPLETED!</Text>
          <Text style={styles.greatText}>Great!</Text>
          <Text style={styles.subtitle}>
            Plant Care Day{" "}
            <Text style={styles.subtitleBold}>
              Kartını başarıyla tamamladınız.
            </Text>
          </Text>
          <View style={styles.pointsContainer}>
            <View style={styles.circle}>
              <Text style={styles.pointText}>5</Text>
              <Image
                source={require("../../assets/images/leaf.png")}
                style={styles.leafIcon}
              />
              <View style={styles.fireIcon}>
                <SimpleLineIcons name="fire" size={24} color="black" />
              </View>
            </View>
          </View>
          <View style={styles.iconsContainer}>
            <View style={styles.iconBox}>
              <Feather style={styles.iconImage} name="camera" size={24} color="black" />
              <Text style={styles.iconText}>+1</Text>
            </View>
            <View style={styles.iconBox}>
              <Ionicons style={styles.iconImage} name="mic-outline" size={24} color="black" />
              <Text style={styles.iconText}>+1</Text>
            </View>
            <View style={[styles.iconBox, styles.disabled]}>
              <EvilIcons style={styles.iconImage} name="play" size={24} color="black" />
              <Text style={styles.iconText}>-</Text>
            </View>
          </View>
          <Text style={styles.extraPointsText}>
            Daha fazla puan kazanmak için{"\n"}
            <Text style={styles.extraPointsBold}>video yükleyebilirsiniz.</Text>
          </Text>
          <View style={styles.nextCardContainer}>
            <Text style={styles.nextCardTitle}>RELATED CARDS</Text>
            <Text style={styles.cardTitle}>Plant Care Day</Text>
            <View style={styles.nextCardContent}>
              <TouchableOpacity>
                <View>
                  <AntDesign disabled name="arrowleft" size={24} color="gray" />
                </View>
              </TouchableOpacity>
              <View style={styles.card}>
                <Image
                  source={require("../../assets/images/woman.png")}
                  style={styles.cardImage}
                />
              </View>
              <TouchableOpacity>
                <View>
                  <AntDesign name="arrowright" size={24} color="black" />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.newCardButton}>
              <Text style={styles.newCardButtonText}>CONTINUE NEW CARD</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nextCardContainer}>
            <Text style={styles.nextCardTitle}>MEET PEOPLE</Text>
            <Text style={styles.cardTitle}>Botano Neighbors</Text>
            <View style={styles.nextCardContent}>
              <View style={styles.meetCard}>
                <Image
                  source={require("../../assets/images/frames.png")}
                  style={styles.meetCardImage}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.newCardButton}>
              <Text style={styles.newCardButtonText}>DISCOVERY NEW CAMP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nextCardContainer}>
            <Text style={styles.nextCardTitle}>NEXT CAMP</Text>
            <Text style={styles.cardTitle}>Mindfulness</Text>
            <Text style={styles.cardTitle}>Practices</Text>
            <View style={styles.nextCardContent}>
              <View style={styles.campCard}>
                <Image
                  source={require("../../assets/images/camp.png")}
                  style={styles.campImage}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.newCardButton}>
              <Text style={styles.newCardButtonText}>DISCOVERY NEW CAMP</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.footer}>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={() => console.log("Continue Pressed")}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
      </BottomSheet>
    </SafeAreaView>
  );
};


export default KartModal;
