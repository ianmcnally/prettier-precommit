# Move the precommit script to a project
#
# Arguments:
#   - The path to your repo

set -e

dir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
echo "Linking the pre commit script $dir/pre-commit to $1/.git/hooks"

ln -s $dir/precommit.js $1/.git/hooks
ln -s $dir/pre-commit $1/.git/hooks

