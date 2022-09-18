// 하나 이상의 함수나 클래스, 객체에서 사용하는 경우 적용
// 단순한 값이 아닌 계산식에 필요한 값, 계산시에 의미가 부여되는 경우에 적용되어야 한다.
const STANDARD_GRAIVITY = 9.81;

function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAIVITY * height;
}
