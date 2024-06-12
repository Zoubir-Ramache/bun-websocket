.PHONY: dev

dev:
	tmux new-session -d -s dev-session
	tmux send-keys 'cd server && bun dev' C-m
	tmux split-window -h
	tmux send-keys 'cd chat-app && bun dev' C-m
	tmux -2 attach-session -d

up:
	 docker compose up
