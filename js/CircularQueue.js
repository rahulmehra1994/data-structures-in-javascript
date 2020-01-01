let arr = new Array(5).fill(null)
let front = -1,
  rear = -1

function peek() {
  return arr[front]
}

function display() {
  let temp = ""
  if (isEmpty()) {
    console.log("queue is empty")
    return
  }
  for (let i = front; i <= rear; i++) {
    temp += " " + arr[i]
  }
  return temp
}

function enqeue(val) {
  //main condition to check front and rear has collieded
  if ((rear + 1) % arr.length == front) {
    console.log("queue is full")
  } else if (front === -1 && rear === -1) {
    front++
    rear++
    arr[rear] = val
  } else {
    rear = (rear + 1) % arr.length
    arr[rear] = val
  }
}

function deqeue() {
  if (isEmpty()) {
    console.log("queue is empty")
  } else if (front === rear) {
    arr[front] = null
    front = -1
    rear = -1
  } else {
    arr[front] = null
    front = (front + 1) % arr.length
  }
}

function isEmpty() {
  if (front === -1 && rear === -1) return true

  if (front !== rear) return false

  if (front === rear) return false
}
