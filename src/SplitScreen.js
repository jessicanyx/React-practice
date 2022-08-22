import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${props => props.weight} ;
`;
export const SplitScreen = ({
    children,
    leftWeight=1,
    rightWeight=1,
 }) => {
    const [Left, Right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>
        {Left}
      </Pane>
      <Pane weight={rightWeight}>
        {Right}
      </Pane>
    </Container>
  );
};
